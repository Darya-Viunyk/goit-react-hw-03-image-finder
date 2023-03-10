import { Component } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import * as ItemApi from './ItemApi';
import './styles.css';

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
    isLoading: false,
    error: null,
  };

  onHandleSubmit = value => {
    this.setState({ query: value, page: 1, imeges: [], isEmpty: false });
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.getFotos(query, page);
    }
  }
  onButtonClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  getFotos = async (query, page) => {
    try {
      this.setState({ isLoading: true, error: null });
      const imeges = await ItemApi.getImages(query, page);
      this.setState(prevState => {
        return {
          imeges: [...prevState.imeges, ...imeges.hits],
        };
      });
    } catch (error) {
      this.setState({
        error: 'Oшибка, попробуйте еще раз!!',
      });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { imeges, error, isLoading } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.onHandleSubmit} />
        {imeges.length > 0 && <ImageGallery imeges={imeges} />}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {imeges.length > 0 && <Button onButtonClick={this.onButtonClick} />}
        {isLoading && <ClipLoader />}
      </>
    );
  }
}
