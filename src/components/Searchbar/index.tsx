import React from 'react';
import './style.css';

interface IState {
  searchValue: string
}

export class Searchbar extends React.Component<Record<string, never>, IState> {
  constructor(props: Record<string, never>) {
    super(props)
      this.state = {
        searchValue: '',
      }
  }
  componentDidMount(): void {
    const lsValue = localStorage.getItem('searchValue');
    this.setState({searchValue: lsValue ?? ''});
  }
  render(): React.ReactNode {
    return (
      <form className="searchbar">
        <input
          value={this.state.searchValue}
          className="searchbar__input" type="text" autoComplete="off" placeholder='Search'
          onInput={(e) => {
            this.setState({searchValue: (e.target as HTMLInputElement).value});
            localStorage.setItem('searchValue', (e.target as HTMLInputElement).value);
          }} 
        />
        <button className="searchbar__submit" type="submit">Search</button>
      </form>
    );
  }
}

export default Searchbar;