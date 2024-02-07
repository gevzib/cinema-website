import logo from './logo.svg';
import './App.css';
import Person from './AddFilm';
import Home from './Home';
import AddFilm from './AddFilm';
import Films from './Films';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Film1 from './Film1';
import Film2 from './Film2';
import Film3 from './Film3';
import Nav from './Nav';
import Contact from './Contact';
import ConfirmFilm from './ConfirmFilm';
import Profile from './Profile';
import { useState } from 'react';

import Home from "./Home";
import AddFilm from "./AddFilm";
import Films from "./Films";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Nav from "./Nav";
import Contact from "./Contact";
import ConfirmFilm from "./ConfirmFilm";
import FilmCard from "./FilmCard";
import { createContext } from "react";
const ThemeContext = createContext(null);
function App() {
  let [userDetails, setUserDetails] = useState({});


  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/films" element={<Films />} />
            <Route path="/films/:films_id" element={<FilmCard />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile setUserDetails= {setUserDetails}/>} />
          </Routes>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
