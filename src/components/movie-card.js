
import './movie-card.css'
import React, {Component} from 'react';
import { FaStar } from "react-icons/fa";



class MovieCard extends Component {
    render() {
        return (
            <div>
                { this.props.liste.map((element)=>
                    <div className="MovieCard">
                        <div className="ImageCard">
                            <div className="starsCard">
                                <p>{element.rank}<FaStar/> </p>
                            </div>
                            <img className="img" src={element.image} alt=''/>
                        </div>
                        <div className="TitleDate">
                            <p>{element.name}{'-'}{element.year}</p>
                        </div>
                    </div>)}
            </div>

        )
    }
}
export default MovieCard;


