import { createPortal } from 'react-dom';
import { Component } from 'react';
import style from './Modal.module.css';
const modalRoot = document.querySelector('#modal-root');
export class Modal extends Component {
  state = {};
  componentDidMount() {
    window.addEventListener('keydown', this.onKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeydown);
  }

  onKeydown = e => {
    if (e.code === 'Escape') {
      this.props.toggleModal();
    }
  };
  onClikOverlay = e => {
    if (e.target !== e.currentTarget) return;

    this.props.toggleModal();
  };
  render() {
    const { largeImageURL, onClikOverlay } = this.props;
    return createPortal(
      <div className={style.modalBackdrop} onClick={onClikOverlay}>
        <div className={style.modalContent}>
          <img src={largeImageURL} alt="img" />
        </div>
      </div>,
      modalRoot
    );
  }
}
