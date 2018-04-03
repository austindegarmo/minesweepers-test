import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class business extends React.Component {
  render() {
<div className="Business">
  <div className="image-container">
    <img src='https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg' alt=''/>
  </div>
  <h2>MarginOtto Pizzeria</h2>
  <div className="Business-information">
    <div className="Business-address">
      <p>1010 Paddington Way</p>
      <p>Flavortown</p>
      <p>NY 10101</p>
    </div>
    <div className="Business-reviews">
      <h3>ITALIAN</h3>
      <h3 className="rating">4.5 stars}</h3>
      <p>90 reviews</p>
    </div>
  </div>
</div>

  }
  const businesses = [
    business,
    business,
    business,
    business,
    business,
    business
  ]
const searchYelp(term, location, sortBy) {

}
export BusinessList extends React.Component {
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
}


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
