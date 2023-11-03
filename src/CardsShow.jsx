export function CardsShow(props) {
  const handleClick = () => {
    props.onDestroyCard(props.card);
  };

  return (
    <div>
      <h1>Card information</h1>
      <p>{props.card.name}</p>
      <p>CMC: {props.card.cmc}</p>
      <p>{props.card.card_type}</p>
      <p>
        Power: {props.card.power} / Toughness: {props.card.toughness}
      </p>
      <button onclick={handleClick}>Delete Card</button>
    </div>
  );
}
