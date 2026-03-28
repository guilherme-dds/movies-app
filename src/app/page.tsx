import MovieList from "./components/MovieList";
import styles from "./page.module.css";
import { FaPlay, FaPlus, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";

export default function Home() {
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
      </div>

      <MovieList />
    </div>
  );
}
