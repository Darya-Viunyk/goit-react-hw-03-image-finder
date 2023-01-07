import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { ItemApi } from './components/ItemApi';

export class App extends Component {
  state = { query: '', page: 1 };
  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.getPhotos(query, page);
    }
  }
  getPhotos = async (query, page) => {
    try {
      data = await ItemApi.getImeges(query, page);
    } catch (error) {
      console.log(error);
    }
  };
  onHandleSubmit = value => this.setState({ query: value });
  render() {
    return (
      <>
        <Searchbar onSubmit={this.onHandleSubmit} />
        <ImageGallery />
      </>
    );
  }
}
