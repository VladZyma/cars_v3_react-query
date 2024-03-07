import CarItem from './CarItem';

import { useDeleteCarById } from './useDeleteCarById';

import styles from './CarsList.module.css';

function CarsList({
  cars,
  findCarById,
  isCarUpdating,
  addPhotoById,
  isAddingPhoto,
}) {
  const { deleteCarById, isDeleting } = useDeleteCarById();

  return (
    <ul className={styles.list}>
      {cars?.map((car) => (
        <CarItem
          key={car.id}
          car={car}
          deleteCarById={deleteCarById}
          isDeleting={isDeleting}
          findCarById={findCarById}
          isCarUpdating={isCarUpdating}
          addPhotoById={addPhotoById}
          isAddingPhoto={isAddingPhoto}
        />
      ))}
    </ul>
  );
}

export default CarsList;
