export const ImageGalleryItem = ({ webformatURL }) => {
  return (
    <>
      <li>
        <img src={webformatURL} alt="img" />
      </li>
    </>
  );
};
