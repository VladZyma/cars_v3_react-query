import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { carService } from '../../services/car.service';

export function useGetCars() {
  const {
    data: cars,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['cars'],
    queryFn: async () => {
      try {
        const { data } = await carService.getAll();

        toast.success('Cars received!!!');

        return data;
      } catch (error) {
        toast.error(error.message);
      }
    },
  });

  return { cars, isLoading, error };
}
