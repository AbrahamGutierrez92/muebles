import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white">
      <Header/>
      <Home/>  
    </div>
  );
};

export default App;
