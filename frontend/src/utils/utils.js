export const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || 'https://api.onemoreproject.nomoredomains.rocks';

export const AUTORIZATION_PARAMS = {
  baseRoute: API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json'
  }
}

