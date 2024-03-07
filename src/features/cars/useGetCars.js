import { useSearchParams } from 'react-router-dom';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { carService } from '../../services/car.service';

export function useGetCars() {
  const [searchParams] = useSearchParams();

  const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));

  const {
    data: cars,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['cars', page],
    queryFn: async () => {
      try {
        const { data } = await carService.getAll(page);

        toast.success('Cars received!!!');

        return data;
      } catch (error) {
        toast.error(error.message);
      }
    },
    placeholderData: keepPreviousData,
  });

  return { cars, isLoading, error };
}
