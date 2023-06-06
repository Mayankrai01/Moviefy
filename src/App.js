import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/header/header";
import Home from "./Components/Home/home";
import MovieList from "./Components/movieList/movieList";
import Movie from "./Components/moviedetail/movie.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<Movie />} />
          <Route path="movies/:type" element={<MovieList/>} />
          <Route path="/*" element={<h1>error page</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
