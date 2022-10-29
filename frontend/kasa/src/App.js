
import './App.css';
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Location from './pages/Location';
import Error from './pages/Error';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/:id" element={<Location/>}/>
          <Route path="*" element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
