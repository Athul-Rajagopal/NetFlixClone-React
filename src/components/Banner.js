import React, {useEffect, useState} from 'react';
import { API_KEY,imageUrl } from '../constants/constants';
import '../components/banner.css';
import axios from '../axios';

function Banner() {
    const [movie, setMovie] = useState()

    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) =>{
            const randomIndex = Math.floor(Math.random() * response.data.results.length);
            const randomMovie = response.data.results[randomIndex];
            // console.log(response.data.results[randomIndex]);
            setMovie(randomMovie);
        })
    }, [])

  return (
    <div className='banner' style={{backgroundImage:`url(${ movie ? imageUrl+movie.backdrop_path : ''})`}}>
            <div className='content' >
                <h1 className='title'>{movie ? movie.title : ''}</h1>
                <div className='banner_buttons' >
                    <button className='button' >Play</button>
                    <button className='button' >My list</button>
                </div>
                <h1 className='description'>{movie ? movie.overview : ''}</h1>
            </div>
        <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner