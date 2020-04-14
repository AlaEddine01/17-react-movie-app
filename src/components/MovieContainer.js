import React, {Component} from 'react';
import './MovieContainer.css';
import MovieCard from "./movie-card";
// import Stars from "./Stars";
import ModalFilm from './Modal';

class MovieContainer extends Component {

   state={

       Tab:[]
    }

   addFilm = (input) =>{
    this.setState({
        Tab:[...this.state.Tab,input]
    })
    }
    
    render() {
        return (
            <div className="Movie">
                <ModalFilm add={this.addFilm} buttonLabel='showModal' />
                <div className="cards">
                    <MovieCard liste={this.state.Tab}/>
                </div>
                
            </div>
        );
    }
}

export default MovieContainer;