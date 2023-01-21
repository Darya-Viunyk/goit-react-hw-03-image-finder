import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };
  openModal = () => this.satState({ isModalOpen: true });
  closeModal = () => this.satState({ isModalOpen: false });
  render() {
    const { webformatURL, largeImageURL } = this.props;
    const { isModalOpen } = this.state;
    return (
      <>
        <div>
          <li>
            <img src={webformatURL} alt="img" onClick={this.openModal} />
          </li>
          {isModalOpen && (
            <Modal largeImageURL={largeImageURL} onClose={this.closeModal} />
          )}
        </div>
      </>
    );
  }
}
