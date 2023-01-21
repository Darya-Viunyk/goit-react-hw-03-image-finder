// import * as basicLightbox from 'basiclightbox';

export const Modal = ({ largeImageURL, onClose }) => {
  return (
    <>
      <div>
        <div>
          <img src={largeImageURL} alt="img" />
        </div>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </>
  );
};
// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)

// instance.show()
// instance.show();

// import React from 'react';
// import s from './Modal.module.css';

// export default class Modal extends React.Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.onKeydown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.onKeydown);
//   }

//   onKeydown = e => {
//     if (e.code === 'Escape') {
//       this.props.toggleModal();
//     }
//   };
//   onClikOverlay = e => {
//     if (e.target !== e.currentTarget) return;

//     this.props.toggleModal();
//   };

//   render() {
//     const { imgUrl } = this.props;
//     return (
//       <div onClick={this.onClikOverlay} className={s.overlay}>
//         <div className={s.modal}>
//           <img src={imgUrl} alt="img" />
//         </div>
//       </div>
//     );
//   }
// }
