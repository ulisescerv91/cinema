import React,{useState, useEffect} from 'react';
import './Header.scss'
import {requestImg} from '../../../../utils/requests'
const Header = ({movie}) => {
    const {title, backdrop_path } = movie;
    const [bgImg, setBgImg] = useState({})
    
    useEffect( ()=> {
        const fetchMovies = async () =>{
            setBgImg({backgroundImage: `url( ${ requestImg.fetchMovieImg(backdrop_path) } )`})
            return true;
        }
        fetchMovies();
    },[])

    
    
    return (
        <div className='header' style={bgImg} >
            <h1>{title}</h1>
        </div>
    );
}

export default Header;
