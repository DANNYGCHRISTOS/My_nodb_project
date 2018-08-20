import React, { Component } from "react";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
class App extends Component {
  render() {
    return (
      <div>
        <div>{/* <Header /> */}</div>
        <div className="App">
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
