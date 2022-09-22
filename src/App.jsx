import React from "react";
import "./App.css";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import CardsContainer from "./components/CardsContainer";

class App extends React.Component {
  state = {
    search: "",
  };

  handleSearch = (value) => {
    this.setState({ search: value });
  };

  render() {
    return (
      <>
        <Header serach={this.state.search} handleSearch={this.handleSearch} />
        <LandingSection />
        <div className="div">
          <h2 className="animeSectionTitle">Animes List</h2>
          <CardsContainer search={this.state.search} />
        </div>
      </>
    );
  }
}

export default App;
