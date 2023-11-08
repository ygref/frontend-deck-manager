/* eslint-disable react/prop-types */
import "./CardsIndex.css";
export function CardsIndex(props) {
  return (
    <div className="cards-index-container">
      <h1 className="allcardstitle">All Cards</h1>
      <div className="card-container">
        {props.cards.map((card) => (
          <div className="card" key={card.id}>
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
    </div>
  );
}
