import React from 'react';
import Navbar from './components/Navbar';
import './App.css'
import Banner from './components/Banner';
import RowPost from './components/RowPost';
import {netflixOriginals, action, trending} from './urls';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost title='Netflix Originals' url={netflixOriginals} />
      <RowPost title='Action' isSmall url={action} />
      <RowPost title='Trending' isSmall url={trending} />
    </div>

  );
}

export default App;
