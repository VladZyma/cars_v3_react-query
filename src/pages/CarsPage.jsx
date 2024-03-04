import CarsList from '../features/cars/CarsList';
import CarForm from '../features/cars/CarForm';

function CarsPage() {
  return (
    <div>
      <CarForm />
      <hr />
      <CarsList />
    </div>
  );
}

export default CarsPage;
