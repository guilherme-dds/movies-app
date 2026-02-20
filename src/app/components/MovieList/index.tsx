'use client'

import { useEffect, useState } from 'react';
import './index.css';
import axios from 'axios';
import { Movie } from '@/types/movie';
import MovieCard from '../MovieCard';

export default function MovieList() {
    const [movies, setMovies] = useState<Movie[]>([]);

    const API_URL = "https://api.themoviedb.org/3/discover/movie"

    const getMovies = () => {
        axios({
            method: 'get',
            url: API_URL,
            params: {
                api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
                language: 'pt-BR',
            }
        }).then(response => {
            setMovies(response.data.results);
        })
    }

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div className='movie-preview'>
            <ul className="movie-list">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </ul>
        </div>
    )
}