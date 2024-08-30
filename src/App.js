import React from 'react';
import './App.css';
import MyNavbar from './Components/MyNavbar';
import MyFooter from './Components/MyFooter';
import Search from './Components/Search';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import CityDetails from './Components/CityDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <MyNavbar />
        </header>
        <main className='home'>
          <Search />
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/previsioni" element={<CityDetails />} />
          </Routes>
        </main>
        <footer>
          <MyFooter />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
