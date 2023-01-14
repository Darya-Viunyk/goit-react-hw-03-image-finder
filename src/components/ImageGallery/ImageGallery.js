import { ImageGalleryItem } from './ImageGalleryItem';
export const ImageGallery = ({ imeges }) => {
  // const { id, webformatURL, largeImageURL } = this.state;
  return (
    <ul>
      {imeges.length > 0 &&
        imeges.map(({ imeges }) => {
          return <ImageGalleryItem />;
        })}
    </ul>
  );
};
