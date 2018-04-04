import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BusienessList from '../BusinessList/BusinessList'

const business  {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Bordertown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90

  }

 const businesses = [
    business,
    business,
    business,
    business,
    business
  ];

searchYelp(term, location, sortBy) {

  console.log({searchYelp} with {term} {location} {sortBy})

};

class BusinessList extends React.Component {
  render() {
    return (
      
    <div propsName={BusinessList}>
      <Business />
      <Business />
      <Business />
      <Business />
      <Business />
      <Business />
    </div>)
  }
};


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
