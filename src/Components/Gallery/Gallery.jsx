import { useState } from 'react';
import classes from './Gallery.module.css';
import Modal from '../Modal/Modal';
import Close from '../UI/Close/Close';
import FormBtn from '../UI/FormBtn/FormBtn';

const Gallery = ({images, initialCount = 12, step = 12}) => {
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const [isOpen, setIsOpen] = useState(null);

  const visibleImages = images.slice(0, visibleCount);
  const hasMore = visibleCount < images.length;

  return (
    <>
      <ul className={classes.list}>
        {visibleImages.map((item, i) => (
          <li className={classes.item} key={i}>
            <img
              className={classes.img}
              src={item}
              alt={`Работа ${i + 1}`}
              loading="lazy"
              onClick={() => setIsOpen(item)}
            />
          </li>
        ))}
      </ul>

      {hasMore && (
        <FormBtn type="button" onClick={() => setVisibleCount((prev) => prev + step)}>
          Показать ещё
        </FormBtn>
      )}

      {isOpen && (
        <Modal>
          <Close onClick={() => setIsOpen(null)} />
          <img className={classes.modalImg} src={isOpen} alt="" />
        </Modal>
      )}
    </>
  );
};

export default Gallery;
