import React, { useState,useEffect} from 'react';

import './Banner.css';
import axios from './axios.js';
import requests from './Request.js'


function Banner() {
    const [movie, setMovie] = useState([]);
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.fetchPopular);
            setMovie(request.data.results
                [
                Math.floor(Math.random() * request.data.results.length - 1)
            ]
        )
          return request;
        }
        fetchData();
    },[])
    console.log('movie',movie)
    function truncuate(string,n){
        return string.length > n ? string.substr(0,n-1) + '.....'   : string
        
    }

  return (
    <header className="banner" style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`,
        backgroundSize : "cover",
        backgroundPosition :"center center",
    }}>
        <div className="bannerDetails">
            <h1 className="bannerheading">{movie.original_title}</h1>
            <div className="bannerbuttonGroup">
                <button className="bannerbuttons">play</button>
                <button className="bannerbuttons">like</button>
            </div>
            <p className="bannerdescription">
                {truncuate(`${movie.overview}`,150)}
            </p>
        </div>
        <div className="bannerBottom"></div>

    </header>
  )
}

export default Banner
