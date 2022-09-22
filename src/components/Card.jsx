import React, { Component } from "react";

class Card extends Component {
  render() {
    const {
      animeData: { mal_id, title, images },
    } = this.props;

    const displayedTitle =
      title.split(" ").length >= 2
        ? title.split(" ").slice(0, 2).join(" ")
        : title;
    return (
      <div key={mal_id} className="card">
        <img src={images.jpg.image_url} alt={title} />
        <button>{displayedTitle}</button>
      </div>
    );
  }
}

export default Card;
