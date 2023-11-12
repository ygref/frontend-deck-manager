/* eslint-disable react/prop-types */
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
        <button type="submit">Update Deck Info</button>
      </form>
      <h1>Deck Info</h1>
      <p>Deck Name: {props.deck.name}</p>
      <p>Format: {props.deck.format}</p>
      <p>Card Count: {props.deck.card_count}</p>
      Cards:{" "}
      {props.deck.card_decks.map((card_deck) => (
        <div key={card_deck.id}>
          <p>
            {card_deck.card.name} (x{card_deck.quantity})
          </p>
          <p>CMC: {card_deck.card.cmc}</p>
          <p>{card_deck.card.card_type}</p>
          <p>
            Power: {card_deck.card.power} / Toughness: {card_deck.card.toughness}
          </p>
          <p>Oracle Text: {card_deck.card.oracle_text}</p>
        </div>
      ))}
      <button onClick={handleClick}>Destroy Deck</button>
    </div>
  );
}
