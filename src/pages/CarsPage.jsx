import CarsList from '../features/cars/CarsList';
import CarForm from '../features/cars/CarForm';

import { useGetCars } from '../features/cars/useGetCars';

function CarsPage() {
  const { cars, isLoading, error } = useGetCars();

  return (
    <div>
      <CarForm />
      <hr />
      {isLoading && <h1>Loading</h1>}
      {error && <h1>{error.message}</h1>}

      <CarsList cars={cars?.items} />
    </div>
  );
}

export default CarsPage;
