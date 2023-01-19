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
    const imeges = await ItemApi.getImages(query, page);
    this.setState(prevState => {
      return {
        imeges: [...prevState.imeges, ...imeges],
      };
    });
  };
  onButtonClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  render() {
    const { imeges } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.onHandleSubmit} />
        {imeges.length > 0 && <ImageGallery imeges={imeges} />}

        <Button onClick={this.onButtonClick} />
      </>
    );
  }
}
