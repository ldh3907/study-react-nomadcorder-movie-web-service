import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ year, title, summary, poster }) {
  return (
    <div class="movie">
      <img class="movie-img" src={poster} alt={title} title={title} />
      <div class="movie-data">
        <h3 class="movie-title">영화 이름 : {title}</h3>
        <h5 class="movie-year">년도 : {year}</h5>
        <p class="movie-summary">작품 설명 : {summary}</p>
      </div>
    </div>
  );
}

Movie.protoType = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
