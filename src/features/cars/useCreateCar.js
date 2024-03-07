import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { carService } from '../../services/car.service';

export function useCreateCar() {
  const queryClient = useQueryClient();

  const { mutate: createCar, isLoading: isCreating } = useMutation({
    mutationFn: carService.createCar,
    onSuccess: () => {
      toast.success('New car successfully created');
      queryClient.invalidateQueries({ queryKey: ['cars'] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { createCar, isCreating };
}
