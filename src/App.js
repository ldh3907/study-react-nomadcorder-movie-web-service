import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoaing: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoaing: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoaing, movies } = this.state;
    return (
      <div>
        {isLoaing
          ? "loading..."
          : movies.map((movie) => {
              console.log(movie);
              return <Movie id year title summary poster />;
            })}
      </div>
    );
  }
}

export default App;
