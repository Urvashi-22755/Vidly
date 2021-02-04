import React from "react";
import LikeButton from "./common/likeButton";
const MoviesTable = (props) => {
  const { newMovies, onDelete, onLike, incrementCount } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Stock</th>
          <th>Rate</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {newMovies.map((movie) => (
          <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <LikeButton
                key={movie._id}
                id={movie._id}
                liked={movie.liked}
                onClick={() => {
                  onLike(movie);
                  incrementCount(movie);
                }}
                likes={movie.totalLikes}
              ></LikeButton>
            </td>
            <td>
              <button
                onClick={() => onDelete(movie._id)}
                className="btn btn-sm btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
