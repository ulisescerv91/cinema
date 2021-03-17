import React,{useState, useEffect, useContext} from 'react';
import './Header.scss'
import DataContext from '../../../../utils/Context/Data/DataContext'

import {requestImg} from '../../../../utils/requests'


const Header = () => {

    const { trendingArrayCtx } = useContext(DataContext) 
    const movie = trendingArrayCtx[ Math.floor(Math.random() * trendingArrayCtx.length)  ]


    const {title, backdrop_path } = movie;
    const [bgImg, setBgImg] = useState({})
    
    useEffect( ()=> {
        console.log(movie)
        const fetchMovies = async () =>{
            setBgImg({backgroundImage: `url( ${ requestImg.fetchMovieImg(backdrop_path) } )`})
            return true;
        }
        fetchMovies();
    },[movie])

    
    
    return (
        <div className='header' style={bgImg} >
            <h1 className='header__title'>{title}</h1>
            <div className="header__options-container">
                <button className="header__options-container__more-details">+ Details</button>
                <button className="header__options-container__favorities">My Favorites</button>
            </div>
        </div>
    );
}

export default Header;
