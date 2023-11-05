export function CardDeckForm(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateCardDeck(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>Add Card To Deck:</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Deck ID: <input name="deck_id" type="text" />
        </div>
        <div>
          Card ID: <input name="card_id" type="text" />
        </div>
        <div>
          Quantity: <input name="quantity" type="text" />
        </div>

        <button type="submit">Add Card To Deck</button>
      </form>
    </div>
  );
}
