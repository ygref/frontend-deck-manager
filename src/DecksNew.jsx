export function DecksNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateDeck(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>Add Deck:</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Format <input name="game_format" type="text" />
        </div>
        <div>
          Card Count: <input name="card_count" type="text" />
        </div>
        <button type="submit">Create Deck</button>
      </form>
    </div>
  );
}
