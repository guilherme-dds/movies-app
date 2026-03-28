"use client";

import MovieList from "./components/MovieList";
import styles from "./page.module.css";
import { FaPlay, FaPlus, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { useEffect, useState } from "react";
import axios from "axios";
import { Movie } from "@/types/movie";
import { Params } from "@/types/params";

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [actionMovies, setActionMovies] = useState<Movie[]>([]);

  const API_URL = "https://api.themoviedb.org/3/discover/movie";
  const apiKey: string = process.env.NEXT_PUBLIC_TMDB_API_KEY!;

  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

  const getMovies = (movieType: string) => {
    let paramsInfo: Params = {
      api_key: apiKey,
      language: "pt-BR",
    };

    if (movieType == "action") {
      paramsInfo.with_genres = 28;
    }

    axios({
      method: "get",
      url: API_URL,
      params: paramsInfo,
    }).then((response) => {
      const data = response.data.results.slice(0, 4);
      console.log(data);
      if (movieType == "action") {
        setActionMovies(data);
      } else {
        setMovies(data);
      }
    });
  };

  useEffect(() => {
    getMovies("action");
    getMovies("");
  }, []);

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h1>Vingadores: Ultimato</h1>
          <p>
            With the help of remaining allies, the Avengers must assemble once
            more in order to undo Thanos's actions and undo the chaos to the
            universe, no matter what consequences may be in store, and no matter
            who they face... Avenge the fallen.
          </p>
          <div className={styles.buttons}>
            <div className={styles.playBtn}>
              <FaPlay />
              <span>Play Trailer</span>
            </div>
            <button>
              <FaPlus />
            </button>
            <button>
              <AiOutlineLike />
            </button>
          </div>
        </div>

        <div className={styles.pagination}>
          <div className={styles.arrow}>
            <FaArrowLeft />
          </div>
          <div className={styles.itemsPagination}>
            <div className={styles.paginationOn}></div>
            <div className={styles.paginationOff}></div>
            <div className={styles.paginationOff}></div>
            <div className={styles.paginationOff}></div>
          </div>
          <div className={styles.arrow}>
            <FaArrowRight />
          </div>
        </div>

        <img
          src="/avengers-endgame-banner.png"
          style={{ borderRadius: "20px" }}
          alt=""
          className={styles.headerImg}
        />
      </div>

      <div className={styles.genres}>
        <div className={styles.title}>Gêneros</div>
        <div className={styles.genresRow}>
          <div className={styles.genresSection}>
            <div className={styles.imageGrid}>
              {actionMovies.map((actionMovie) => (
              <img src={`${IMAGE_BASE_URL}${actionMovie.poster_path}`} key={actionMovie.id} alt="" />
            ))}
            </div>
            <div className={styles.sectionInfo}>
              <span>Ação</span>
              <FaArrowRight />
            </div>
          </div>
          <div className={styles.genresSection}></div>
          <div className={styles.genresSection}></div>
          <div className={styles.genresSection}></div>
          <div className={styles.genresSection}></div>
        </div>
      </div>

      <MovieList />
    </div>
  );
}
