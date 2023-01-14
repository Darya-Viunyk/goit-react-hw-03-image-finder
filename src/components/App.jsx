import { Component } from 'react';
import * as ItemApi from './ItemApi';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    imeges: [],
    isVisBle: false,
    isEmpty: false,
  };

  onHandleSubmit = value => {
    this.setState({ query: value, page: 1, imeges: [], isEmpty: false });
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.getFotos(query, page);
    }
  }
  getFotos = async (query, page) => {
    if (!query) {
      return;
    }
    try {
      const {
        photos,
        totol,
        per_page,
        page: currentPage,
      } = await ItemApi.getImages(query, page);
      if (photos.length === 0) {
        this.setState({ isEmpty: true });
      }
      this.setState(prevState => ({
        imeges: [...prevState.imeges, ...photos],
        isVisBle: currentPage < Math.ceil(totol / per_page),
      }));
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    // const { imeges } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onHandleSubmit} />

        <ImageGallery />

        <Button />
      </>
    );
  }
}
