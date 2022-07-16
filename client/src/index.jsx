import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Movies from "./pages/Movies";
import NewMovie from "./pages/NewMovie";

function Home() {
  return (
    <div className="bg-gray-900 bg w-full h-screen relative overflow-x-hidden">
        <img src={require('./assets/film_projector.gif')} className="bg-cover w-full h-full absolute opacity-60 blur-sm scale-[102%] " />
        <div className="p-4 h-full relative">
          <h1 className="text-3xl text font-bold text-gray-100 items-center justify-center text-center pt-2 hover:text-white transition-all duration-300 ease-in-out">
            <Link to={"/"}>
            FILMLY
            </Link>
          </h1>
          <ul className="items-center justify-center text-center pt-8 p-4">
            <li>
              <Link to={"/movies"} className="text-gray-300 text-lg font-medium hover:text-white transition-all duration-200 ease-in-out">All Movies</Link>
            </li>
            <li>
              <Link to={"/movies/new"} className="text-gray-300 text-lg font-medium hover:text-white transition-all duration-200 ease-in-out">Add Movie</Link>
            </li> 
          </ul>
        
        </div>
      <Footer />
    </div>
  );
}



function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/movies"} element={<Movies />} />
        <Route path={"/movies/new"} element={<NewMovie />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<Application />, document.getElementById("app"));
