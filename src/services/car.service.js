import { axiosService } from './axios.service';
import { urls } from '../configs/urls';

const carService = {
  getAll: (page = 1, page_size = 3) =>
    axiosService.get(urls.cars, { params: { page, page_size } }),
  createCar: (car) => axiosService.post(urls.cars, car),
  updateById: (car, id) => axiosService.put(`${urls.cars}/${id}`, car),
  addPhotoById: (data, id) =>
    axiosService.put(`${urls.cars}/${id}/photo`, data),
  deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`),
};

export { carService };
