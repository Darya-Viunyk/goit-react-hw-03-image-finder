import { ImageGalleryItem } from './ImageGalleryItem';
export const ImageGallery = ({ imeges }) => {
  return (
    <>
      {imeges.length > 0 &&
        imeges.map(({ id, webformatURL, largeImageURL }) => {
          return (
            <ImageGalleryItem
              id={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
            />
          );
        })}
    </>
  );
};
