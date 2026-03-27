import MovieList from "./components/MovieList";
import styles from "./page.module.css"

export default function Home() {
  return (
    <div>
      <div className={styles.header}>
        <img src="/avengers-endgame-banner.png" style={{ borderRadius: "20px" }} alt="" />
      </div>
      
      <MovieList />
    </div>
  );
}
