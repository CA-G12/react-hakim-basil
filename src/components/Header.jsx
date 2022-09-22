import { Component } from "react";
import CardsContainer from "./CardsContainer";

export default class Header extends Component {
  state = {
    searchValue: "",
  };

  passingValue = () => {
    <CardsContainer />;
  };

  render() {
    const { handleSearch } = this.props;
    return (
      <header>
        <h1>showHub</h1>
        <ul>
          <li>anime</li>
          <li>contact</li>
          <li>about us</li>
        </ul>
        <div className="search">
          <input
            type="text"
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="search"
          />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="btns">
          <button id="login">login</button>
          <button>sign up</button>
        </div>
      </header>
    );
  }
}
