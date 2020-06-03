import React from 'react';
import './App.css';
import LinkBlock from './components/LinkBlock/LinkBlock';
import LinksList from './components/LinksList/LinksList';

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <h1>Кликни и получи статью по выбранной теме!</h1>
        <LinkBlock />
        <LinksList />
      </div>
    </div>
  );
}

export default App;