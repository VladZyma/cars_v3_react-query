import CarsList from '../features/cars/CarsList';
import CarForm from '../features/cars/CarForm';

import { useGetCars } from '../features/cars/useGetCars';
import { useCreateCar } from '../features/cars/useCreateCar';

function CarsPage() {
  const { cars, isLoading, error } = useGetCars();
  const { createCar, isCreating } = useCreateCar();

  return (
    <div>
      <CarForm createCar={createCar} />
      <hr />
      {isLoading && <h1>Loading</h1>}
      {error && <h1>{error.message}</h1>}
      {isCreating && <h1>Car is creating...</h1>}

      <CarsList cars={cars?.items} />
    </div>
  );
}

export default CarsPage;
