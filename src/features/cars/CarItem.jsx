import styles from './CarsItem.module.css';

function CarItem({
  car,
  deleteCarById,
  isDeleting,
  findCarById,
  isCarUpdating,
  addPhotoById,
  isAddingPhoto,
}) {
  return (
    <li>
      {isDeleting && <h1>Car is deleting...</h1>}
      {isCarUpdating && <h1> Car is updating</h1>}

      <p>ID: {car.id}</p>
      <p>Brand: {car.brand}</p>
      <p>Price: {car.price}</p>
      <p>Year: {car.year}</p>

      {isAddingPhoto && <h1>Adding car photo</h1>}

      <div className={styles.imgWrapper}>
        {car.photo ? (
          <img className={styles.img} src={car.photo} alt={car.brand} />
        ) : (
          <input type='file' onChange={(e) => addPhotoById(e, car.id)} />
        )}
      </div>
      <button onClick={() => findCarById(car.id)}>UPDATE</button>
      <button onClick={() => deleteCarById(car.id)}>DELETE</button>
    </li>
  );
}

export default CarItem;
