import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";
import Cookbook from "./Pages/Home/PortfolioPages/Cookbook" 
import VolleyballPublication from "./Pages/Home/PortfolioPages/VolleyballPublication";
import Shapes from "./Pages/Home/PortfolioPages/Shapes";
import MagazineIllustration from "./Pages/Home/PortfolioPages/MagazineIllustration";
import SpotifyRedesign from "./Pages/Home/PortfolioPages/SpotifyRedesign";
import OtherArt from "./Pages/Home/PortfolioPages/OtherArt";





function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="src/Pages/Home/PortfolioPages/Cookbook.jsx" element={<Cookbook/>}></Route>
            <Route path="src/Pages/Home/PortfolioPages/VolleyballPublication.jsx" element={<VolleyballPublication/>}></Route>
            <Route path="src/Pages/Home/PortfolioPages/Shapes.jsx" element={<Shapes/>}></Route>
            <Route path="src/Pages/Home/PortfolioPages/MagazineIllustration.jsx" element={<MagazineIllustration/>}></Route>
            <Route path="src/Pages/Home/PortfolioPages/SpotifyRedesign.jsx" element={<SpotifyRedesign/>}></Route>
            <Route path="src/Pages/Home/PortfolioPages/OtherArt.jsx" element={<OtherArt/>}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;