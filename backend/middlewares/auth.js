const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/unauthorized-error');

module.exports = (req, res, next) => {
  const { jwt: token } = req.cookies;
  console.info('----------');
  console.info(req.cookies);
  console.info('----------');
  console.info(req.headers);
  console.info('----------');
  if (!token) {
    next(new UnauthorizedError('Необходима авторизация'));
    console.info('Токен не найден');
  } else {
    let payload;
    try {
      payload = jwt.verify(token, 'tut-budet-secret');
    } catch (err) {
      next(new UnauthorizedError('Не валидный токен авторизации'));
      console.error('Не валидный токен авторизации');
    }
    req.user = payload;
    next();
  }
};
