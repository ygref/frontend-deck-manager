/* eslint-disable react/prop-types */
export function CardsShow(props) {
  const handleClick = () => {
    props.onDestroyCard(props.card);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateCard(props.card.id, params, () => event.target.reset());
  };

  return (
    <div>
      <h1>Card information</h1>
      <p>Name: {props.card.name}</p>
      <p>CMC: {props.card.cmc}</p>
      <p>{props.card.card_type}</p>
      <p>
        Power: {props.card.power} / Toughness: {props.card.toughness}
      </p>

      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={props.card.name} name="name" type="text" />
        </div>
        <div>
          CMC: <input defaultValue={props.card.cmc} name="cmc" type="text" />
        </div>
        <div>
          Power: <input defaultValue={props.card.power} name="power" type="text" /> / Toughness:{" "}
          <input defaultValue={props.card.toughness} name="toughness" type="text" />
        </div>
        <button type="submit">Update Card</button>
      </form>
      <button onClick={handleClick}>Delete Card</button>
    </div>
  );
}
