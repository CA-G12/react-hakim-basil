import React from "react";

class LandingSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.animeDetails !== this.props.animeDetails) {
      this.setState({ data : this.props.animeDetails})
    }
  }
  render() {
    const { data } = this.state;
    return (
      <section id="landing">
        {
          data ? 
            <div className="details">
              <div className="image"><img src={data.images.jpg.image_url} alt={data.title} /><span></span></div>
              <div className="information">
                <h1>{data.title}</h1>
                <p><span>Rate:</span> {data.score}<i className="fa-solid fa-star"></i></p>
                <p><span>Episodes:</span> {data.episodes}</p>
                <p><span>Date:</span> {data.aired.from.split("-")[0]}</p>
                <p className="story"><span>Story:</span> {data.synopsis}</p>
                <div className="btns">
                  <a href={data.trailer.url}>trailer</a>
                  <a href='#cards'>episodes</a>
                </div>
              </div>
            </div>
          :
          <div className="landing">
            <div className="info">
              <h1>Show Hub</h1>
              <h2>enjoy watching</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                expedita modi laboriosam nihil saepe, repellendus unde eligendi!
                Quod vel minus sunt, perferendis nulla soluta aliquam, magni in
                ratione doloribus eos. perferendis nulla soluta aliquam, magni in
                ratione doloribus eos.
              </p>
              <a href="#"></a>
            </div>
            <div className="image">
              <img src="https://i.ibb.co/qW4Qw8f/watching-movie.png" alt="background" />
            </div>
          </div>
        }
      </section>
    );
  }
}

export default LandingSection;
