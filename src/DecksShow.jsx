export function DecksShow(props) {
  return (
    <div>
      <h1>Deck Info</h1>
      <p>Deck Name: {props.deck.name}</p>
      <p>Format: {props.deck.format}</p>
      <p>Card Count: {props.deck.card_count}</p>
      <form>
      <div>Deck Name: {props.deck.name}</p>
      <div>Format: {props.deck.format}</div>
      <div>Card Count: {props.deck.card_count}</div>

      </form>
    </div>
  );
}


// TODO: FIX THE FORM FOR UPDATE DECK