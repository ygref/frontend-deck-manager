export function DecksIndex(props) {
  return (
    <div>
      <h1>All Decks</h1>
      {props.decks.map((deck) => (
        <div key={deck.id}>
          <p>Deck Name: {deck.name}</p>
          <p>Format: {deck.format}</p>
          <p>Card Count: {deck.card_count}</p>
          <button onClick={() => props.onShowDeck(deck)}>More Info</button>
        </div>
      ))}
    </div>
  );
}
