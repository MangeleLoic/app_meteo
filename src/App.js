import React from 'react';
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyNavbar from './Components/MyNavbar';
import MyFooter from './Components/MyFooter';
import Search from './Components/Search';
import Home from './Components/Home';
import CityDetails from './Components/CityDetail';
import NotFound from './Components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          
          <MyNavbar className="py-1" />
        </header>
        
        <main className="home">
         
          <Search />

         
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/previsioni" element={<CityDetails />} /> 
            <Route path="*" element={<NotFound />} />
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
