import "./DecksIndex.css"; //

export function DecksIndex(props) {
  return (
    <div className="decks-index-container">
      {props.decks.map((deck) => (
        <div key={deck.id} className="deck-container">
          <p>Deck Name: {deck.name}</p>
          <p>Format: {deck.format}</p>
          <p>Card Count: {deck.card_count}</p>
          <button onClick={() => props.onShowDeck(deck)}>More Info</button>

          <div className="card-decks-container">
            {deck.card_decks.map((card_deck) => (
              <div key={card_deck.id} className="card">
                <p>
                  {card_deck.card.name} (x{card_deck.quantity})
                </p>
                <p>CMC: {card_deck.card.cmc}</p>
                <p>{card_deck.card.card_type}</p>
                <p>
                  Power: {card_deck.card.power} / Toughness: {card_deck.card.toughness}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
