import React from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
import Content from "./components/Content/Content";
import Slider from "./components/Slider/Slider";

const App = () => {
  return (
    <div className="App">
      <Menu />
      <Content />
      <Slider />
    </div>
  );
};

export default App;
