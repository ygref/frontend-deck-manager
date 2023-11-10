/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Library.css";

export function Library(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = async () => {
    const searchUrl = `https://api.scryfall.com/cards/search?q=${searchQuery}`;
    try {
      const response = await fetch(searchUrl);
      if (response.ok) {
        const data = await response.json();
        setSearchResults(data);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="search-results">
      {" "}
      <h2>Search for a Card Here:</h2>
      <div className="search-container">
        <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
      </div>
      {searchResults && (
        <div className="card-container">
          {" "}
          {searchResults.data.map((result) => (
            <div className="card" key={result.id}>
              {result.card_faces ? (
                <div>
                  {result.card_faces.map((card_faces, index) => (
                    <div key={index}>
                      <img src={card_faces.image_uris.small} />
                      <p>Card Name: {card_faces.name}</p>
                      <p>Mana Cost: {card_faces.mana_cost}</p>
                      <p>Card Type: {card_faces.type_line}</p>
                      <p>Oracle text: {card_faces.oracle_text}</p>
                      <p>
                        Power and Toughness: {card_faces.power}/{card_faces.toughness}
                      </p>
                      <p>Loyalty: {card_faces.loyalty || "N/A"}</p>
                      <p>Sets: {card_faces.set_name || result.set_name || "N/A"}</p>
                      <p>
                        Price USD:{" "}
                        {card_faces.prices && card_faces.prices.usd
                          ? card_faces.prices.usd
                          : result.prices && result.prices.usd
                          ? result.prices.usd
                          : "N/A"}
                      </p>
                      <p>
                        <a href={card_faces.purchase_uris || result.purchase_uris || "N/A"}>Purchase on TCGPlayer</a>{" "}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  <img src={result.image_uris.small} />
                  <p>Card Name: {result.name}</p>
                  <p>Mana Cost: {result.mana_cost}</p>
                  <p>Card Type: {result.type_line}</p>
                  <p>Oracle text: {result.oracle_text}</p>
                  <p>
                    Power and Toughness: {result.power}/{result.toughness}
                  </p>
                  <p>Loyalty: {result.loyalty || "N/A"}</p>
                  <p>Sets: {result.set_name}</p>
                  <p>Price USD: {result.prices.usd}</p>
                  <p>
                    <a href={result.purchase_uris}>Purchase on TCGPlayer</a>{" "}
                  </p>

                  <select onChange={(event) => (result.deck_id = event.target.value)}>
                    <option value="">- Select a Deck -</option>
                    {props.decks.map((deck) => (
                      <option key={deck.id} value={deck.id}>
                        {deck.name}
                      </option>
                    ))}
                  </select>
                  <input
                    type="number"
                    placeholder="quantity"
                    value={result.quantity || 0}
                    onChange={(event) => (result.quantity = event.target.value)}
                  />
                  <button
                    onClick={() =>
                      props.onCreateCard(
                        {
                          name: result.name,
                          card_type: result.type_line,
                          cmc: result.cmc,
                          power: result.power,
                          toughness: result.toughness,
                          quantity: result.quantity,
                          deck_id: result.deck_id,
                        },
                        () => console.log("Done!")
                      )
                    }
                  >
                    Add Card
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
