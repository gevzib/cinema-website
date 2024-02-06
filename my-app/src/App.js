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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter> 
        <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addfilm">
              <Route index element={<AddFilm />} />
              <Route path="confirm" element={<ConfirmFilm />} />
            </Route>
            <Route path="/films">
              <Route index element={<Films />} />
              <Route path="1" element={<Film1 />} />
              <Route path="2" element={<Film2 />} />
              <Route path="3" element={<Film3 />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
