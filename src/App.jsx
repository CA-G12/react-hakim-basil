import React from "react";
import "./App.css";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import CardsContainer from "./components/CardsContainer";

class App extends React.Component {
  state = {
    search: "",
    animeDetails: null,
  };

  handleAnimeDetails = (value) => {
    console.log(value);
    this.setState({ animeDetails: value });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  handleSearch = (value) => {
    this.setState({ search: value });
  };

  
  render() {
    return (
      <>
        <Header serach={this.state.search} handleSearch={this.handleSearch} />
        <LandingSection animeDetails={this.state.animeDetails} />
        <div className="div">
          <h2 className="animeSectionTitle">Animes List</h2>
          <CardsContainer search={this.state.search} handleAnimeDetails={this.handleAnimeDetails} />
        </div>
      </>
    );
  }
}

export default App;
