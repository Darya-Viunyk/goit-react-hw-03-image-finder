import { createPortal } from 'react-dom';
import { Component } from 'react';
import style from './Modal.module.css';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');
export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeydown);
  }

  onKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  onClikOverlay = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };
  render() {
    // const { largeImageURL } = this.props;
    return createPortal(
      <div className={style.modalBackdrop} onClick={this.onClikOverlay}>
        <div className={style.modalContent}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
