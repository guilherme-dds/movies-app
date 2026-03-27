import MovieList from "./components/MovieList";


export default function Home() {
  return (
    <div>
      <div className="header">
        <img src="/avengers-endgame-banner.png" alt="" />
      </div>
      
      <MovieList />
    </div>
  );
}
