import axios from 'axios';

import { baseURL } from '../configs/urls';
import { oauthService } from './oauth.service';

const axiosService = axios.create({ baseURL });

axiosService.interceptors.request.use((config) => {
  const access = oauthService.getAccessTokenKey();

  if (access) {
    config.headers.Authorization = `Bearer ${access}`;
  }

  return config;
});

export { axiosService };
