import React, { JSX } from "react";
import "./App.css";
import { Navbar } from "./components/header/Navbar";
import { Main } from "./components/main/Main";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
};

export default App;
