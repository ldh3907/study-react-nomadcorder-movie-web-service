import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import { Link } from "react-router-dom";

function Movie({ year, title, summary, poster, genres }) {
  return (
    <Link
      to={{
        pathname: "/movie-detail",
        state: {
          year: year,
          title: title,
          summary: summary,
          poster: poster,
          genres: genres,
        },
      }}
    >
      <div className="movie">
        <img className="movie-img" src={poster} alt={title} title={title} />
        <div className="movie-data">
          <h3 className="movie-title">{title}</h3>
          <ul className="genres">
            {genres.map((genre, index) => (
              <li key={index} className="genres-genre">
                {genre},
              </li>
            ))}
          </ul>
          <h5 className="movie-year">{year}</h5>
          <p className="movie-summary">{summary.slice(0, 180)}...</p>
        </div>
      </div>
    </Link>
  );
}

Movie.protoType = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
