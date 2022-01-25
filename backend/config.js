require('dotenv').config();

const FRONTEND_DOMAIN = process.env.FRONTEND_DOMAIN || 'onemoreproject.nomoredomains.rocks';
const APP_PROTOCOL = process.env.PROTOCOL || 'https';
const APP_PORT = process.env.PORT || 3000;

module.exports = { APP_PORT, APP_PROTOCOL, FRONTEND_DOMAIN };
