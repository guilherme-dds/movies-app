import { Movie } from "@/types/movie";
import { useState } from "react";
import './index.css';
import StarRating from "../StarRating";

export interface Props {
    movie: Movie
}

export default function MovieCard(props: Props) {
    const [hovered, setHovered] = useState(null);
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

    return (
        <li key={props.movie.id}
            className={`movie-card ${hovered === props.movie.id ? "active" : ""}`}
            onMouseEnter={() => setHovered(props.movie.id as any)}
            onMouseLeave={() => setHovered(null)}
        >
            <img src={`${IMAGE_BASE_URL}${props.movie.poster_path}`} alt="" />
            <div className='movie-info'>
                <h1>{props.movie.title}</h1>
                <div className="movie-overview">
                    <StarRating rating={props.movie.vote_average}/>
                </div>
            </div>
        </li>
    )
}