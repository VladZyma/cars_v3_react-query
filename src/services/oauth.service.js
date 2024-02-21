import { axiosService } from './axios.service';
import { urls } from '../configs/urls';

const _accessTokenKey = 'accessTokenKey';
const _refreshTokenKey = 'refreshTokenKey';

const oauthService = {
  login: (user) => axiosService.post(urls.auth.login, user),
  refresh: (refresh) => axiosService.post(urls.auth.refresh, { refresh }),

  setAccessTokenKeys: ({ access, refresh }) => {
    localStorage.setItem(_accessTokenKey, access);
    localStorage.setItem(_refreshTokenKey, refresh);
  },

  getAccessTokenKey: () => {
    return localStorage.getItem(_accessTokenKey);
  },

  getRefreshTokenKey: () => {
    return localStorage.getItem(_refreshTokenKey);
  },

  deleteAccessTokenKeys: () => {
    localStorage.removeItem(_accessTokenKey);
    localStorage.removeItem(_refreshTokenKey);
  },
};

export { oauthService };
