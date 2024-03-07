import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

import { carValidator } from '../../validators/car.validator';

function CarForm({ createCar, carForUpdate, setCarForUpdate, updateCarById }) {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { isValid, errors },
  } = useForm({ mode: 'all', resolver: joiResolver(carValidator) });

  useEffect(() => {
    if (carForUpdate) {
      setValue('brand', carForUpdate.brand, { shouldValidate: true });
      setValue('price', carForUpdate.price, { shouldValidate: true });
      setValue('year', carForUpdate.year, { shouldValidate: true });
    }
  }, [carForUpdate, setValue]);

  function onFormSubmit(car) {
    try {
      if (carForUpdate) {
        updateCarById({ car, id: carForUpdate.id });
        setCarForUpdate(null);
      } else {
        createCar(car);
      }

      reset();
    } catch (error) {
      console.log('Create_Car_Err:', error);
      reset();
    }
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <input type='text' placeholder='brand' {...register('brand')} />
      {errors.brand && <span>{errors.brand.message}</span>}

      <input
        type='text'
        placeholder='price'
        {...register('price', { valueAsNumber: true })}
      />
      {errors.price && <span>{errors.price.message}</span>}

      <input
        type='text'
        placeholder='year'
        {...register('year', { valueAsNumber: true })}
      />
      {errors.year && <span>{errors.year.message}</span>}

      <button disabled={!isValid}>{carForUpdate ? 'UPDATE' : 'CREATE'}</button>
    </form>
  );
}

export default CarForm;
