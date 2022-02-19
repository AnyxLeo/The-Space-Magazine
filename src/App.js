import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Explore from "./components/Explore/Explore";
import Footer from "./components/Footer/Footer";
import Galleries from "./components/Galleries/Galleries";
import SubscribeForm from './components/Forms/SubscribeForm'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header></Header>
        <div className="main-content">
          <Routes>
            <Route exact path="/The-Space-Magazine" element={<Home />}></Route>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/Home" element={<Home />}></Route>
            <Route exact path="/Explore" element={<Explore />}></Route>
            <Route exact path="/Galleries" element={<Galleries />}></Route>
            <Route exact path="/Subscribe" element={<SubscribeForm />}></Route>
          </Routes>
        </div>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
