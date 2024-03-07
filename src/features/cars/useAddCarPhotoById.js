import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { carService } from '../../services/car.service';

export function useAddCarPhotoById() {
  const queryClient = useQueryClient();

  const { mutate: addCarPhotoById, isLoading: isAddingPhoto } = useMutation({
    mutationFn: (data) => carService.addPhotoById(data.formData, data.id),
    onSuccess: () => {
      toast.success('Car photo has been added');
      queryClient.invalidateQueries({
        queryKey: ['cars'],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { addCarPhotoById, isAddingPhoto };
}
