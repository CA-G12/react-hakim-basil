import React from "react";
import Card from "./Card";

class CardsContainer extends React.Component {
  state = {
    data: null,
  };

  componentDidMount = () => {
    getAnimes().then((data) => {
      this.setState({ data });
    });
  };

  filterableAnimes = () => {
    return this.state.data.data.filter((card) => {
      return card.title
        .toLowerCase()
        .startsWith(this.props.search.toLowerCase());
    });
  };

  render() {
    if (!this.state.data) return <div>hello from the other side</div>;
    return (
      <section id="cards">
        {this.filterableAnimes().map((anime) => (
          <Card key={anime.title} animeData={anime} />
        ))}
      </section>
    );
  }
}

const getAnimes = () => {
  return fetch("https://api.jikan.moe/v4/anime")
    .then((res) => {
      if (!res.ok) throw new Error("HTTP error");
      return res;
    })
    .then((res) => res.json(res));
};

export default CardsContainer;
