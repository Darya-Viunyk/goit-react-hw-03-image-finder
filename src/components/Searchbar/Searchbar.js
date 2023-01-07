import { Component } from 'react';

export class Searchbar extends Component {
  state = { query: '' };
  handleInput = event => {
    this.setState({ query: event.currentTarget.value.toLowerCase().trim() });
  };
  handleSubmit = event => {
    const { query } = this.state;
    event.preventDefault();
    this.props.onSubmit(query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            onChange={this.handleInput}
            value={this.state.query}
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
