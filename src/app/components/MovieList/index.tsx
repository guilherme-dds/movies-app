'use client'

import { useEffect, useState } from 'react';
import './index.css';
import axios from 'axios';
import { Movie } from '@/types/movie';
import { Params } from '@/types/params';
import MovieCard from '../MovieCard';

export default function MovieList() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [actionMovies, setActionMovies] = useState<Movie[]>([]);

    const API_URL = "https://api.themoviedb.org/3/discover/movie"
    const apiKey: string = process.env.NEXT_PUBLIC_TMDB_API_KEY!

    const getMovies = (movieType: string) => {
        let paramsInfo: Params = {
            api_key: apiKey,
            language: 'pt-BR',
        }
        
        if(movieType == "action"){
            paramsInfo.with_genres = 28;
        }

        axios({
            method: 'get',
            url: API_URL,
            params: paramsInfo,
        }).then(response => {
            if(movieType == "action"){
                setActionMovies(response.data.results);
            } else {
                setMovies(response.data.results);
            }
        })
    }

    useEffect(() => {
        getMovies("action");
        getMovies("")
    }, []);

    return (
        <div className='movie-preview'>
            <ul className="movie-list">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </ul>
            <div className='title-section'>
                <h1>Ação</h1>
                <div className='bar'></div>
            </div>
            <ul className="movie-list">
                {actionMovies.map((actionMovie) => (
                    <MovieCard key={actionMovie.id} movie={actionMovie}/>
                ))}
            </ul>
        </div>
    )
}