import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { carService } from '../../services/car.service';

export function useUpdateCarById() {
  const queryClient = useQueryClient();

  const { mutate: updateCarById, isLoading: isCarUpdating } = useMutation({
    mutationFn: (data) => carService.updateById(data.car, data.id),
    onSuccess: () => {
      toast.success('Car successfully updated');
      queryClient.invalidateQueries({
        queryKey: ['cars'],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updateCarById, isCarUpdating };
}
