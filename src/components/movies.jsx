import React, { Component } from 'react';
import {getMovies } from '../services/fakeMovieService';
import {deleteMovie} from '../services/fakeMovieService'; 

class Movies extends Component {
    state = {
        movies: getMovies()
    };

    handleDelete = (id) => {
        // console.log(id);
        // let idname =  deleteMovie(id);
        //  console.log(idname)
      //  console.log('handle clicked!');

      const movies = this.state.movies.filter( m => m._id !== id);  //return movies except this ID
      this.setState({movies : movies}); //OR  this.setState({movies}); If both const and state prop are same name.(here, movies..)
    }

    render() { 

        const {length :movieCount} = this.state.movies; //{'length' indicate the length prop of the value}

        if(movieCount === 0)
            return <h4>There are No movies in the Database!!</h4>;

        return (<div>
             <p className='m-5'>There are {movieCount} movies in the Database.</p>
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                </tr>
            </thead>
            <tbody>{this.state.movies.map(movie => (
                <tr key={movie._id}><td>{movie.title}</td><td>{movie.genre.name}</td><td>{movie.numberInStock}</td><td>{movie.dailyRentalRate}</td><td><button onClick={() => this.handleDelete(movie._id)}  className='btn btn-sm btn-danger'>Delete</button></td></tr>
            ))}   
            </tbody>
        </table>
        </div>
      );
    }
}
 
export default Movies;