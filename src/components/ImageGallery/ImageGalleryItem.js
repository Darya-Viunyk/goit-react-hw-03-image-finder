import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import styles from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = webformatURL => {
    this.setState({ isModalOpen: true });
  };
  closeModal = () => this.setState({ isModalOpen: false });
  render() {
    const { webformatURL } = this.props;
    const { isModalOpen } = this.state;
    return (
      <>
        <li className={styles.imageGalleryItem}>
          <img
            src={webformatURL}
            alt="img"
            onClick={this.openModal}
            className={styles.imageGalleryItemImage}
          />
          {isModalOpen && (
            <Modal onClose={this.closeModal}>
              <img src={this.props.largeImageURL} alt="img" />
            </Modal>
          )}
        </li>
      </>
    );
  }
}
