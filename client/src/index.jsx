import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import Movies from "./pages/Movies";
import NewMovie from "./pages/NewMovie";
import { Login } from "./pages/Login";
import {LoginCallback} from "./pages/LoginCallback";
import {Profile} from "./pages/Profile";

function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/login/callback"} element={<LoginCallback />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/movies"} element={<Movies />} />
        <Route path={"/movies/new"} element={<NewMovie />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<Application />, document.getElementById("app"));
