import "./App.css";
import Home from "./Home";
import Films from "./Films";
import Nav from "./Nav";
import Contact from "./Contact";
import Profile from "./Profile";
import { useContext, useState } from "react";
import AddFilm from "./AddFilm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FilmCard from "./FilmCard";
import { ThemeContext } from "./contexts/context";

function App() {
  let [userDetails, setUserDetails] = useState({});
  const DarkMode = useContext(ThemeContext);
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeContext.Provider value={"dark"}>
          <header className="App-header">
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/films" element={<Films />} />
              <Route path="/films/:films_id" element={<FilmCard />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/profile"
                element={
                  <Profile
                    setUserDetails={setUserDetails}
                    userDetails={userDetails}
                  />
                }
              />
              <Route path="/addfilm" element={<AddFilm />} />
            </Routes>
          </header>
        </ThemeContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
