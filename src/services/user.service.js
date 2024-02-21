import { axiosService } from './axios.service';
import { urls } from '../configs/urls';

const userService = {
  register: (user) => axiosService.post(urls.register, user),
};

export { userService };
