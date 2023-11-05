export function DecksShow(props) {
  const handleClick = () => {
    props.onDestroyDeck(props.deck);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateDeck(props.deck.id, params, () => event.target.reset());
  };
  return (
    <div>
      <h1>Deck Info</h1>
      <p>Deck Name: {props.deck.name}</p>
      <p>Format: {props.deck.format}</p>
      <p>Card Count: {props.deck.card_count}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Deck Name: <input defaultValue={props.deck.name} name="name" type="text" />
        </div>
        <div>
          Format: <input defaultValue={props.deck.format} name="game_format" type="text" />
        </div>
        <div>
          Card Count: <input defaultValue={props.deck.card_count} name="card_count" type="text" />
        </div>
        <button type="submit">Update Deck</button>
      </form>
      <button onClick={handleClick}>Destroy Deck</button>
    </div>
  );
}
