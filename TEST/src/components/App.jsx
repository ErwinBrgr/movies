import React, { Component } from 'react';
import MoviesList from './MoviesList.jsx'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const API_KEY = "5e02044861740f3118eb48cc66fb2274"





class App extends Component {
  state = {
    post : []
  }

  async componentDidMount(){
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key='+ API_KEY +'&language=en-US&page=1';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({post: data.results})
    console.log(data)
  }

  render(){
    return (
      <div className="App">
        <header id="head">
          <div id="logo">
            <img src={require("../clapperboard.svg")}/>
             <h1 class="bleu">Movie</h1><h1>Finder</h1>
              <nav id="navigation">
                <ul id="menu">
                  <li><a class="blanc" href="#">Accueil</a></li>
                  <li><a class="bleu" href="#">Recherche</a></li>
                </ul>
              </nav>
          </div>  
        </header>
        <div id="selection">
          <h2>Tous les films</h2>
            <div id = "searchbar">
            <input id="searchB" type="search" placeholder="Rechercher" name="recherche"/>           
          </div>
        </div>
        <MoviesList movies={this.state.post}/>
      </div>
    );  
  }
}

export default App;
