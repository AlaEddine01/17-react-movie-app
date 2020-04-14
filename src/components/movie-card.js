import "./movie-card.css";
import React, { Component } from "react";
import { FaStar } from "react-icons/fa";

class MovieCard extends Component {
  render() {
    return (
      <div className="cards">
        {this.props.liste.map((element) => (
          <div className="MovieCard">
            <p className="rank">
              {element.rank}
              <FaStar  />
            </p>
            <img className="img" src={element.image} alt="" />
            <p>
              {element.name}
              {"-"}
              {element.year}
            </p>
          </div>
        ))}
      </div>
    );
  }
}
export default MovieCard;
