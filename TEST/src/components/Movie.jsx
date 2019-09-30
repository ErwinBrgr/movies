import React, { Component } from 'react'


const API_KEY = "5e02044861740f3118eb48cc66fb2274"
// const ID = this.props.movie.id
// console.log(ID)


class Movie extends Component{

  state = {
    movieDetail  : []
  }
 

async componentDidMount(){
    const url = 'https://api.themoviedb.org/3/movie/'+ this.props.movie.id+'?api_key=5e02044861740f3118eb48cc66fb2274&language=en-US';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({movieDetail: data})
    console.log(data)
  }

  render() {
    
    return (
      <li id="individual"> 
        <img src={'https://image.tmdb.org/t/p/w500/' + this.props.movie.poster_path}/>
        <p>{this.props.movie.title}</p>
        <p>{this.props.movie.release_date}</p>


        <p>{this.state.movieDetail.revenue - this.state.movieDetail.budget}</p>

      </li>
    )
  }

}

export default Movie
