import "./index.css"
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
    return (
    <nav className="navbar">
        <h1 className="page-title">Filmes</h1>
        <ul>
          <li className="movies-btn">Filmes</li>
          <li className="shows-btn">Séries</li>
          <li className="list-btn">Lista</li>
        </ul>
        <div className="search-btn">
          <FaSearch color="white" size={20} />
        </div>
    </nav>
  );
}