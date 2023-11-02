import axios from "axios";
import { useState, useEffect } from "react";

import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { DecksIndex } from "./DecksIndex";

export function Content() {
  const [decks, setDecks] = useState([]);
  const handleIndexDecks = () => {
    console.log("handleIndexDecks");
    axios.get("http://localhost:3000/decks.json").then((response) => {
      console.log(response.data);
      setDecks(response.data);
    });
  };

  useEffect(handleIndexDecks, []);
  return (
    <div>
      <Signup />
      <Login />
      <LogoutLink />
      <DecksIndex decks={decks} />
    </div>
  );
}
