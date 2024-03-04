import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

import { carValidator } from '../../validators/car.validator';

function CarForm() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { isValid, errors },
  } = useForm({ mode: 'all', resolver: joiResolver(carValidator) });

  function onFormSubmit(car) {}

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

      <button disabled={!isValid}>CREATE</button>
    </form>
  );
}

export default CarForm;
