import React, { Component } from "react";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import Title from "./components/Title";
class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Title />
          <MainPage />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
