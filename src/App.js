import React from 'react';
import './App.css';
import LinkBlock from './components/LinkBlock/LinkBlock'
import LinksList from './components/LinksList/LinksList'

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <LinkBlock />
        <LinksList />
      </div>
    </div>
  );
}

export default App;