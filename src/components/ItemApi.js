import { Component } from 'react';

export default class ItemApi extends Component {
  state = { query: null, loading: false, error: null };
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.query;
    const nextName = this.props.query;

    if (prevName !== nextName) {
      console.log('Change name');
      this.setState({ loading: true, query: null });
      fetch(
        'https://pixabay.com/api/?q=${query}&page=1&key=30923283-33d2e606614da3e7093560986&image_type=${query}&orientation=horizontal&per_page=12'
      )
        .then(responce => {
          if (responce.ok) {
            return responce.json();
          }
          return Promise.reject(new Error(`Нет такого ${nextName}`));
        })
        .then(query => this.setState({ query }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <h1>{this.state.error.message}</h1>}
        {this.state.loading && <div>Загружаем...</div>}
        {!this.props.query && <div>Введите имя....</div>}
        {this.state.query && (
          <div>
            <p>{this.state.query.hits.id}</p>
            <img
              src={this.state.query.hits.webformatUR}
              alt={this.state.query}
              width="640"
            />
            <img
              src={this.state.query.hits.largeImageURL}
              alt="Картинка"
              width="4000"
            />
          </div>
        )}
      </div>
    );
  }
}

// export const getImages = async (query, page) => {
//   const { data } = await axios.get(`search?query=${query}&page=${page}`);
//   return data;
// };
// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
