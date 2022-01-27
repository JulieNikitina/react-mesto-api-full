const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors, celebrate, Joi } = require('celebrate');
const cookieParser = require('cookie-parser');
// eslint-disable-next-line import/no-unresolved
const cors = require('cors');
const { login, createUser } = require('./controllers/user');
const auth = require('./middlewares/auth');
const regExp = require('./utils/regexp');
const NotFoundError = require('./errors/not-found-error');
const { APP_PORT, FRONTEND_DOMAIN, APP_PROTOCOL } = require('./config');

const app = express();
app.use(cors({
  origin: [`${APP_PROTOCOL}://${FRONTEND_DOMAIN}`],
  allowedHeaders: ['Access-Control-Allow-Credentials', 'Access-Control-Allow-Origin', 'Content-Type'],
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  credentials: true,
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

mongoose.connect('mongodb://localhost:27017/mydb', {
  useNewUrlParser: true,
}, (err) => {
  if (err) {
    console.error('Unable to connect to mongodb', err);
  }
});

app.post(
  '/signin',
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().min(8).required(),
    }).unknown(true),
  }),
  login,
);
app.post(
  '/signup',
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().min(8).required(),
      name: Joi.string().min(2).max(30),
      about: Joi.string().min(2).max(30),
      avatar: Joi.string().pattern(regExp),
    }).unknown(true),
  }),
  createUser,
);
app.use(auth);
app.use('/users', require('./routes/user'));
app.use('/cards', require('./routes/card'));

app.post('/signout', (req, res) => {
  res.status(200).clearCookie('jwt', {
    domain: `.${FRONTEND_DOMAIN}`,
    httpOnly: false,
    sameSite: false,
    secure: false,
  }).send({ message: 'Выход' });
});

app.use((req, res, next) => {
  next(new NotFoundError('Пока запрашиваемой вами страницы нет, но не отчаивайтесь, возмоно она появится'));
});

app.use(errors());

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  // Прописываем дефолты на случай если внезапно прилетело что-то неожиданное
  res.status(err.statusCode || 500);
  res.send({ message: err.message || 'Неизвестная ошибка' });
});

app.listen(APP_PORT, () => {
  console.info(`App listening on port ${APP_PORT}`);
});
