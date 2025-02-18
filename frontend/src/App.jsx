import React, { Profiler } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Profile from "./pages/profile";
import Home from "./pages/Home";
import Dashboard from "./components/Dashboard";

// import './App.css'

function App() {

  return (
    <>

    <Router>
    <Navbar />
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Dashboard" element={<Dashboard/>} />
      <Route path="/Profile" element={<Profile />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  </Router>

    </>
  )
}

export default App
