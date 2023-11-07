/* eslint-disable react/prop-types */
export function CardsIndex(props) {
  return (
    <div>
      <h1>All Cards</h1>
      {props.cards.map((card) => (
        <div key={card.id}>
          <p>{card.name}</p>
          <p>CMC: {card.cmc}</p>
          <p>{card.card_type}</p>
          <p>
            Power: {card.power} / Toughness: {card.toughness}
          </p>
          <button onClick={() => props.onShowCard(card)}>More Info:</button>
        </div>
      ))}
    </div>
  );
}
