import React from 'react';
import './SearchBar.css';

handleTermChange.handleLocationChange.bind(this);

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};

const getSortByClass(sortByOption) {
  if(this.state == sortByOption) {
    return 'active';
  }else {
    return ' '
  }

}

const handleSortByChange(sortByOption) {
  setState(this.sortBy());

}

const handleTermChange(event) {
  {term: event.target.value}

  this.setState({});


}

const handleLocationChange(event) {

  {location: event.target.value}

  this.setState({});

}

const handleSearch(event) {

  props.searchYelp(term, location, sortBy)
  event.preventDefault();

}

bind.handleSearch();

class SearchBar extends React.Component {
  constructor(props) {
    this.state = {
      term: ' ',
      location: ' ',
      sortBy: 'best_match'
    };
  }
  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li onClick={handleSortByChange.bind(this, sortByOptionValue)}className={this.getSortByClass()} key={sortByOptionValue}>{sortByOption}</li>;
    });
  }

  render() {
    return (
      <div className="SearchBar" {this.searchYelp}>
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input onChange={handleTermChange} placeholder="Search Businesses" />
          <input onChange={placeholder}="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;