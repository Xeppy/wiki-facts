import React, { Component } from 'react';
import WikiFetch from './containers/WikiFetch';
import ErrorBoundary from './components/ErrorBoundary';
import './stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ErrorBoundary>
          <WikiFetch />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
