import React,{useContext} from 'react';
import './Movie.scss'
import {useHistory} from 'react-router-dom'

import DataContext from '../../utils/Context/Data/DataContext'

const Movie = () => {

    const history = useHistory();

    const { selectedMovie } = useContext(DataContext) 

    if(selectedMovie === null) {
        history.push('/')
        return false;
    }

    return (
        <div>
            <h1>{selectedMovie.title}</h1>
        </div>
    );
}

export default Movie;
