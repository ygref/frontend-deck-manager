export function CardsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateCard(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>Add Card:</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          CMC: <input name="cmc" type="text" />
        </div>
        <div>
          Card Type: <input name="card_type" type="text" />
        </div>
        <div>
          Power: <input name="power" type="text" />
        </div>
        <div>
          Toughness: <input name="toughness" type="text" />
        </div>
        <button type="submit">Add Card</button>
      </form>
    </div>
  );
}
