import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Movie from "./components/Movie";
import MovieList from "./components/MovieList";
// import Upcoming from './components/Upcoming';
import Home from "./components/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<Movie />}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
