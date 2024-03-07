import { useState } from 'react';

import CarsList from '../features/cars/CarsList';
import CarForm from '../features/cars/CarForm';

import { useGetCars } from '../features/cars/useGetCars';
import { useCreateCar } from '../features/cars/useCreateCar';
import { useUpdateCarById } from '../features/cars/useUpdateCarById';

function CarsPage() {
  const [carForUpdate, setCarForUpdate] = useState(null);

  const { cars, isLoading, error } = useGetCars();
  const { createCar, isCreating } = useCreateCar();
  const { updateCarById, isCarUpdating } = useUpdateCarById();

  function findCarById(id) {
    const car = cars.items.find((car) => car.id === id);
    setCarForUpdate(car);
  }

  return (
    <div>
      <CarForm
        createCar={createCar}
        carForUpdate={carForUpdate}
        setCarForUpdate={setCarForUpdate}
        updateCarById={updateCarById}
      />
      <hr />
      {isLoading && <h1>Loading</h1>}
      {error && <h1>{error.message}</h1>}
      {isCreating && <h1>Car is creating...</h1>}

      <CarsList
        cars={cars?.items}
        findCarById={findCarById}
        isCarUpdating={isCarUpdating}
      />
    </div>
  );
}

export default CarsPage;
