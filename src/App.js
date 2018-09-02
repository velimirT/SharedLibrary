import React, { Component } from 'react';
import './App.css';
import { ListWrap, LibrariesSliderWrap } from './components/Containers';

class App extends Component {
  render() {
    console.log("test")
    return (
      <section className="App">
        <header className="App-header">
          <h1 className="App-title">Shared Library</h1>
        </header>
        <main>
          <LibrariesSliderWrap />
          <p className="App-intro">
            Click one of the libraries in the list to get started!
          </p>
          <ListWrap />
        </main>
      </section>
    );
  }
}

export default App;
