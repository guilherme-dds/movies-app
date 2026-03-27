'use client'

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Movie } from '@/types/movie';
import { Params } from '@/types/params';
import MovieCard from '../MovieCard';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import './index.css';

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
            <div className='main-films'>
                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    className="mySwiper"
                    spaceBetween={40}
                    slidesPerView="auto"
                    centeredSlides={false}
                >
                    {movies.map((movie) => (
                        <SwiperSlide key={movie.id}>
                            <MovieCard key={movie.id} movie={movie}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className='title-section'>
                <h1>Ação</h1>
                <div className='bar'></div>
            </div>
            <div className="action-films">
                <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                className="mySwiper"
                spaceBetween={10}
                slidesPerView={7}
                slidesPerGroup={7}
                watchSlidesProgress={true}
                breakpoints={{
                    320: { slidesPerView: 2, slidesPerGroup: 2 },
                    640: { slidesPerView: 3, slidesPerGroup: 3 },
                    1024: { slidesPerView: 5, slidesPerGroup: 5 },
                }}
                >
                    {actionMovies.map((actionMovie) => (
                        <SwiperSlide key={actionMovie.id}>
                            <MovieCard key={actionMovie.id} movie={actionMovie}/>
                        </SwiperSlide>
                    ))}
                 </Swiper>
            </div>
        </div>
    )
}