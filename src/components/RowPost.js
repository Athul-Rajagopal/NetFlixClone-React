import React from 'react';
import '../components/rowpost.css';
import { useEffect,useState } from 'react';
import axios from '../axios';
import { imageUrl } from '../constants/constants';
import Youtube from 'react-youtube';
import { API_KEY } from '../constants/constants';

function RowPost(props) {
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    const [movies, setMovies ] = useState([]);
    const [urlid, setUrlid] = useState('');
    useEffect(() => {
      axios.get(props.url).then((response) => {
        console.log(response.data)
        setMovies(response.data.results)
      })

    }, [])
    const handleMovie = (id) =>{
        console.log(id)
        axios.get(`movie/${id}/videos?api_key=${API_KEY}`).then(response=>
            {if(response.data.results.length !==0){
              setUrlid(response.data.results[0])
            } else{console.log('Array Empty')}})
    }
    
  return (
    <div className='row'>
    <h2>{props.title}</h2>
    <div className='posters'>
        {movies.map((movie) =>
        <img onClick={()=> handleMovie(movie.id)} className={props.isSmall ? 'smallPoster' : 'poster' } alt='poster' src={`${imageUrl+movie.backdrop_path}`} /> 
        )}
        
        
    </div>
    { urlid && <Youtube opts={opts} videoId={urlid.key} />}

</div>
  )
}

export default RowPost