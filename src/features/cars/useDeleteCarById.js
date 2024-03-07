import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { carService } from '../../services/car.service';

export function useDeleteCarById() {
  const queryClient = useQueryClient();

  const { mutate: deleteCarById, isLoading: isDeleting } = useMutation({
    mutationFn: carService.deleteById,
    onSuccess: () => {
      toast.success('Car successfully deleted');
      queryClient.invalidateQueries({
        queryKey: ['cars'],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { deleteCarById, isDeleting };
}
