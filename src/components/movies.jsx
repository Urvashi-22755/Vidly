import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
/* import { deleteMovie } from "../services/fakeMovieService"; */
import ListGroup from "../components/common/listGroup";
import MoviesTable from "./moviesTable";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";

class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4, //4 movies on each page.
    currentPage: 1,
    genres: [],
  };

  //call the backend services
  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenres() });
  }
  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 }); //if the current page is >1, it wont render data less than 4 because
    //current State is >1 nd hence firts page wont be displayed.
  };
  handleDelete = (id) => {
    const movies = this.state.movies.filter((m) => m._id !== id); //return movies except this ID
    this.setState({ movies: movies }); //OR  this.setState({movies}); If both const and state prop are same name.(here, movies..)
  };

  handleLike = (movie) => {
    // console.log('liked!!', movie);
    let cloneMovies = [...this.state.movies];
    let index = cloneMovies.indexOf(movie);
    cloneMovies[index].liked = !cloneMovies[index].liked;
    console.log("liked state", cloneMovies[index].liked);
    this.setState({ movies: cloneMovies });
  };

  handleCount = (movie) => {
    //console.log(movie);

    let cloneMovies = [...this.state.movies];
    const index = cloneMovies.indexOf(movie);
    console.log("liked state -2 ", cloneMovies[index].liked);
    if (cloneMovies[index].liked) {
      cloneMovies[index].totalLikes++;
    }
    console.log("in add");
    this.setState({ movies: cloneMovies });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page }); //set the clicked page to currentPage
  };
  render() {
    const { length: movieCount } = this.state.movies; //{'length' indicate the length prop of the value}
    const { pageSize, currentPage, movies, selectedGenre } = this.state;

    if (movieCount === 0) return <h4>There are No movies in the Database!!</h4>;

    //filter data based on Genre Selection List group
    const filterSelection =
      selectedGenre && selectedGenre._id
        ? movies.filter((movie) => movie.genre._id === selectedGenre._id)
        : movies;

    // const newMovies = paginate(movies, currentPage, pageSize);     default was all movie display

    const newMovies = paginate(filterSelection, currentPage, pageSize); //now movies displayed based on selection!

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            selectedList={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          ></ListGroup>
        </div>
        <div className="col">
          <div>
            <h4 className="m-5">List Of Movies</h4>
            <p>There are {filterSelection.length} movies in the Database.</p>

            {/* Movies Table */}
            <MoviesTable
              newMovies={newMovies}
              onDelete={this.handleDelete}
              onLike={this.handleLike}
              incrementCount={this.handleCount}
            ></MoviesTable>
            {/* Pagination Table */}
            <Pagination
              movieCount={filterSelection.length}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
