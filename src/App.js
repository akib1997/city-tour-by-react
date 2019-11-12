import React, { Component } from "react";
import "./App.scss";
import Navbar from "./components/navbar/navbar";
import TourList from "./components/tourlist";

class App extends Component {
  state = {};
  render() {
    return (
      <main>
        <Navbar />
        <TourList />
      </main>
    );
  }
}

export default App;
