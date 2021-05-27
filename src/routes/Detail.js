import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <section className="movie-detail-container">
          <div className="movie-detail">
            <div className="movie-detail-data-wrap">
              <img
                className="movie-detail-poster"
                src={location.state.poster}
                alt={location.state.title}
                title={location.state.title}
              />
              <div className="movie-detail-data">
                <div className="movie-detail-title">{location.state.title}</div>
                <div className="movie-detail-year">{location.state.year}</div>
                <ul className="movie-detail-genres">
                  {location.state.genres.map((genre, index) => (
                    <li key={index} className="movie-detail-genre">
                      {genre}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <hr className="movie-detail-content-middle-line" />
            <div className="movie-detail-summary-title">Summary</div>
            <div className="movie-detail-summary">{location.state.summary}</div>
          </div>
        </section>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
