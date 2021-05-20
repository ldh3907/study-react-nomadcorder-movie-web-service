import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoaing: true,
    movies: [],
  };
  getMovies = async () => {
    const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoaing } = this.state;
    return <div>{isLoaing ? "loading..." : "we are ready"}</div>;
  }
}

export default App;
