import CarItem from './CarItem';

import styles from './CarsList.module.css';

function CarsList({ cars }) {
  return (
    <ul className={styles.list}>
      {cars?.map((car) => (
        <CarItem key={car.id} car={car} />
      ))}
    </ul>
  );
}

export default CarsList;
