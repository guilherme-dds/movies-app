"use client"

import "./index.css"
import { FaSearch } from "react-icons/fa";
import Link from "next/link"
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname()
    return (
    <nav className="navbar">
        <h1 className="page-title">Filmes</h1>
        <ul>
          <Link href="/" className={pathname == "/" ? "active-nav" : "default-nav"}>Filmes</Link>
          <Link href="/Series" className={pathname == "/Series" ? "active-nav" : "default-nav"}>Séries</Link>
          <Link href="/List" className={pathname == "/List" ? "active-nav" : "default-nav"}>Lista</Link>
        </ul>
        <div className="search-btn">
          <FaSearch color="white" size={20} />
        </div>
    </nav>
  );
}