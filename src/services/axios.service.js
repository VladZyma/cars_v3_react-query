import axios from 'axios';
import { createBrowserHistory } from 'history';

import { baseURL } from '../configs/urls';
import { oauthService } from './oauth.service';

let isRefreshing = false;
const history = createBrowserHistory();

const axiosService = axios.create({ baseURL });

axiosService.interceptors.request.use((config) => {
  const access = oauthService.getAccessTokenKey();

  if (access) {
    config.headers.Authorization = `Bearer ${access}`;
  }

  return config;
});

axiosService.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const refresh = oauthService.getRefreshTokenKey();

    if (error.response?.status === 401 && refresh && !isRefreshing) {
      isRefreshing = true;

      try {
        const { data } = oauthService.refresh(refresh);
        oauthService.setAccessTokenKeys(data);
      } catch (error) {
        oauthService.deleteAccessTokenKeys();
        history.replace('/login?expSession=true');
      }

      isRefreshing = false;
      return axiosService(error.config);
    }

    return Promise.reject(error);
  }
);

export { axiosService, history };
