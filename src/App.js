import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from '../src/pages/homePage';

function App() {
  return (
    <div className='App'>
      <Header/>
      <HomePage/>
      <Footer />
    </div>
  );
}

export default App;
