import { ImageGalleryItem } from './ImageGalleryItem';
export const ImageGallery = ({ imeges }) => {
  return (
    <>
      {imeges.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
          />
        );
      })}
    </>
  );
};
