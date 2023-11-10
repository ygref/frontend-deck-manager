/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Library.css";

export function Library(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const handleQuantityChange = (value) => {
    setQuantity(value);
  };

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

  const handleAddCard = (card) => {
    props.onCreateCard(
      {
        name: card.name,
        card_type: card.type_line,
        cmc: card.cmc,
        power: card.power,
        toughness: card.toughness,
        quantity: card.quantity,
        deck_id: card.deck_id,
      },
      () => (window.location.href = "/decks")
    );
  };

  const renderCardDetails = (card) => (
    <div>
      <img src={card.image_uris.small} />
      <p>Card Name: {card.name}</p>
      <p>Mana Cost: {card.mana_cost}</p>
      <p>Card Type: {card.type_line}</p>
      <p>Oracle text: {card.oracle_text}</p>
      <p>
        Power and Toughness: {card.power}/{card.toughness}
      </p>
      <p>Loyalty: {card.loyalty || "N/A"}</p>
      <p>Sets: {card.set_name}</p>
      <p>Price USD: {card.prices && card.prices.usd ? card.prices.usd : "N/A"}</p>
      <p>
        <a href={card.purchase_uris}>Purchase on TCGPlayer</a>{" "}
      </p>
      <select onChange={(event) => (card.deck_id = event.target.value)}>
        <option value="">- Select a Deck -</option>
        {props.decks.map((deck) => (
          <option key={deck.id} value={deck.id}>
            {deck.name}
          </option>
        ))}
      </select>
      <input type="number" placeholder="quantity" onChange={(event) => (card.quantity = event.target.value)} />
      <button onClick={() => handleAddCard(card)}>Add Card</button>
    </div>
  );

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
                  {result.card_faces.map((cardFaces, index) => (
                    <div key={index}>{renderCardDetails(cardFaces)}</div>
                  ))}
                </div>
              ) : (
                <div>{renderCardDetails(result)}</div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
