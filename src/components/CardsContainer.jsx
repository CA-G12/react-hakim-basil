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

  render() {
    if (!this.state.data) return <div>hello from the other side</div>;

    const { data } = this.state.data;
    return (
      <section id="cards">
        {data.map((anime) => (
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

{
  /* <div className="card">
  <img src="https://cdn.myanimelist.net/images/anime/1439/93480.jpg" alt="" />
  <button>Movie Name</button>
</div>; */
}
