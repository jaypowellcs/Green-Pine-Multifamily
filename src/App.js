import React from 'react';
import './App.css';
import Header from './components/Header';
import HomePage from '../src/pages/homePage';

function App() {
  return (
    <div className='App'>
      <Header/>
      <HomePage/>
    </div>
  );
}

export default App;
