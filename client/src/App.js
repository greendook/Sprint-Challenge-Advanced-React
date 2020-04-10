import React, { Component } from 'react';
import PlayerCard from './components/PlayerCard';
import Navbar from './components/NavBar';
import './App.css';

class App extends Component {
  // "C" for class
  constructor() {
    //"C for constructor"
    super();
    this.state = {
      data: [],
    };
  }
  // componentdidmount is fetching the data  from our data.js
  componentDidMount() {
    console.log('CDM');
    fetch('http://localhost:5000/api/players')
      // json used to transmit data between a server and web application
      .then((res) => res.json())
      .then((names) => this.setState({ data: names }))
      .catch((err) => console.log('fail'));
  }

  render() {
    // "R" for render
    return (
      <div>
        <div className="App">
          <Navbar />
        </div>
        <div className="cards">
          {this.state.data.map((players) => (
            <PlayerCard players={players} />
          ))}
        </div>
      </div>
    );
  }
}
export default App;
