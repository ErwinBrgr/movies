import React, { Component } from 'react'
import Movie from './Movie.jsx'
class MoviesList extends Component{
	render() {
    console.log(this.props)
    return(

  		<ul id="filmList">
        {this.props.movies.map((movie, index) => {
          console.log(movie.title)
          
          return (
            <Movie key={index} movie={movie}/>
          )
        })} 
      </ul>
    )
	}

}

export default MoviesList