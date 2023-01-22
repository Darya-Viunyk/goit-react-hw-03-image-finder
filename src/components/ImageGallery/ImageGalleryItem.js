import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    showedModal: false,
  };

  toggleModal = () => {
    this.setState(prevState => {
      return {
        showedModal: !prevState.showedModal,
      };
    });
  };
  openModal = webformatURL => {
    this.satState({ isModalOpen: webformatURL });
    this.toggleModal();
  };
  closeModal = () => this.satState({ isModalOpen: false });
  render() {
    const { webformatURL, largeImageURL } = this.props;
    const { isModalOpen } = this.state;
    return (
      <>
        <li>
          <img src={webformatURL} alt="img" onClick={this.toggleModal} />
          {isModalOpen && (
            <Modal
              largeImageURL={largeImageURL}
              onClose={this.closeModal}
              toggleModal={this.toggleModal}
            />
          )}
        </li>
      </>
    );
  }
}
