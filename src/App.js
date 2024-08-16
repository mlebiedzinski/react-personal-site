import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";
import Cookbook from "./Pages/Home/MyProjects/Cookbook" 
import VolleyballPublication from "./Pages/Home/MyProjects/VolleyballPublication";
import Shapes from "./Pages/Home/MyProjects/Shapes";
import MagazineIllustration from "./Pages/Home/MyProjects/MagazineIllustration";
import SpotifyRedesign from "./Pages/Home/MyProjects/SpotifyRedesign";
import OtherArt from "./Pages/Home/MyProjects/OtherArt";





function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="src/Pages/Home/MyProjects/Cookbook.jsx" element={<Cookbook/>}></Route>
            <Route path="src/Pages/Home/MyProjects/VolleyballPublication.jsx" element={<VolleyballPublication/>}></Route>
            <Route path="src/Pages/Home/MyProjects/Shapes.jsx" element={<Shapes/>}></Route>
            <Route path="src/Pages/Home/MyProjects/MagazineIllustration.jsx" element={<MagazineIllustration/>}></Route>
            <Route path="src/Pages/Home/MyProjects/SpotifyRedesign.jsx" element={<SpotifyRedesign/>}></Route>
            <Route path="src/Pages/Home/MyProjects/OtherArt.jsx" element={<OtherArt/>}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;