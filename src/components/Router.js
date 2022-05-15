import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "routes/Contact";
import Home from "routes/Home";
import Project from "routes/Project";
import Navigation from "./Navigation";

function AppRouter() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <>
          <Route path="/" element={<Home />}></Route>
          <Route path="/project" element={<Project />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </>
      </Routes>
    </Router>
  );
}

export default AppRouter;
