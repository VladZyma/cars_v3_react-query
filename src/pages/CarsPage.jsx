import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import CarsList from '../features/cars/CarsList';
import CarForm from '../features/cars/CarForm';

import { useGetCars } from '../features/cars/useGetCars';
import { useCreateCar } from '../features/cars/useCreateCar';
import { useUpdateCarById } from '../features/cars/useUpdateCarById';
import { useAddCarPhotoById } from '../features/cars/useAddCarPhotoById';

const PAGE_SIZE = 3;

function CarsPage() {
  const [carForUpdate, setCarForUpdate] = useState(null);

  const [query, setQuery] = useSearchParams();

  const { cars, isLoading, error } = useGetCars();

  const { createCar, isCreating } = useCreateCar();
  const { updateCarById, isCarUpdating } = useUpdateCarById();
  const { addCarPhotoById, isAddingPhoto } = useAddCarPhotoById();

  function findCarById(id) {
    const car = cars.items.find((car) => car.id === id);
    setCarForUpdate(car);
  }

  function addPhotoById(e, id) {
    const formData = new FormData();
    const file = e.target.files[0];

    formData.append('photo', file);

    addCarPhotoById({ formData, id });
  }

  //  PAGINATION
  const currentPage = !query.get('page') ? 1 : Number(query.get('page'));
  const pageCount = Math.ceil(cars?.total_items / PAGE_SIZE);

  function handlePrevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    query.set('page', prev);
    setQuery(query);
  }

  function handleNextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    query.set('page', next);
    setQuery(query);
  }

  console.log(cars);

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
        addPhotoById={addPhotoById}
        isAddingPhoto={isAddingPhoto}
      />
      <hr />
      <button disabled={currentPage === 1} onClick={handlePrevPage}>
        prev
      </button>
      <button disabled={currentPage === pageCount} onClick={handleNextPage}>
        next
      </button>
    </div>
  );
}

export default CarsPage;
