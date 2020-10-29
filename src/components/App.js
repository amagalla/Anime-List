import React, { Component } from 'react';
import './App.scss';
import ShowList from './ShowList';

class App extends Component {
  render() {
    return (
      <>
        <div>
          <h1 className="anime-title">Anime Watched List</h1>
        </div>
        <div>
          <ShowList />
        </div>
      </>
    );
  }
}

export default App;
