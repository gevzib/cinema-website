import logo from "./logo.svg";
import "./App.css";

import Home from "./Home";
import AddFilm from "./AddFilm";
import Films from "./Films";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Nav from "./Nav";
import Contact from "./Contact";
import ConfirmFilm from "./ConfirmFilm";
import FilmCard from "./FilmCard";

function App() {
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
          </Routes>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
