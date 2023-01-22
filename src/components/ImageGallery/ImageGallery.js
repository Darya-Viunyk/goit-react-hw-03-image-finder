import { ImageGalleryItem } from './ImageGalleryItem';
import styles from './ImageGallery.module.css';
export const ImageGallery = ({ imeges }) => {
  return (
    <ul className={styles.imageGallery}>
      {imeges.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
          />
        );
      })}
    </ul>
  );
};
