import "./Header.css";

import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        <Link to="/logout">Logout</Link>
        <Link to="/decks">Decks</Link>
        <Link to="/decks/new">New Deck</Link>
        <Link to="/cards">Cards</Link>
        <Link to="/cards/new">New Cards</Link>
        <Link to="/carddeck/new">Card to Deck</Link>
      </nav>
    </header>
  );
}
