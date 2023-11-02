export function DecksIndex(props) {
  return (
    <div>
      <h1>All Decks</h1>
      {props.decks.map((deck) => (
        <div key={deck.id}>
          <h2>{deck.name}</h2>
          <h2>{deck.format}</h2>
          <h2>{deck.card_count}</h2>
        </div>
      ))}
    </div>
  );
}
