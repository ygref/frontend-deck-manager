import axios from "axios";
import { useState, useEffect } from "react";

import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

import { DecksIndex } from "./DecksIndex";
import { DecksNew } from "./DecksNew";
import { DecksShow } from "./DecksShow";

import { CardsShow } from "./CardsShow";
import { CardsIndex } from "./CardsIndex";
import { CardsNew } from "./CardsNew";

import { CardDeckForm } from "./CardDeckForm";

import { Modal } from "./Modal";

export function Content() {
  const [decks, setDecks] = useState([]);
  const [isCardsShowVisible, setIsCardsShowVisible] = useState(false);
  const [currentCard, setCurrentCard] = useState({});
  const [isDecksShowVisible, setIsDecksShowVisible] = useState(false);
  const [currentDeck, setCurrentDeck] = useState({});

  const handleIndexDecks = () => {
    console.log("handleIndexDecks");
    axios.get("http://localhost:3000/decks.json").then((response) => {
      console.log(response.data);
      setDecks(response.data);
    });
  };

  const handleCreateDeck = (params, successCallback) => {
    console.log("handleCreateDeck", params);
    axios.post("http://localhost:3000/decks.json", params).then((response) => {
      setDecks([...decks, response.data]);
      successCallback();
    });
  };

  const handleShowDeck = (deck) => {
    console.log("handleShowDeck", deck);
    setIsDecksShowVisible(true);
    setCurrentDeck(deck);
  };
  const handleUpdateDeck = (id, params, successCallback) => {
    console.log("handleUpdateDeck", params);
    axios.patch(`http://localhost:3000/decks/${id}.json`, params).then((response) => {
      setDecks(
        decks.map((deck) => {
          if (deck.id === response.data.id) {
            return response.data;
          } else {
            return deck;
          }
        })
      );
      successCallback();
      handleCloseDeck();
    });
  };

  const handleDestroyDeck = (deck) => {
    console.log("handleDestroyDeck", deck);
    axios.delete(`http://localhost:3000/decks/${deck.id}.json`).then(() => {
      setDecks(decks.filter((p) => p.id !== deck.id));
      handleCloseDeck();
    });
  };

  const handleCloseDeck = () => {
    console.log("handleCloseDeck");
    setIsDecksShowVisible(false);
  };

  const [cards, setCards] = useState([]);
  const handleIndexCards = () => {
    console.log("handleIndexCards");
    axios.get("http://localhost:3000/cards.json").then((response) => {
      console.log(response.data);
      setCards(response.data);
    });
  };
  const handleShowCard = (card) => {
    console.log("handleShowCard", card);
    setIsCardsShowVisible(true);
    setCurrentCard(card);
  };

  const handleCloseCard = () => {
    console.log("handleCloseCard");
    setIsCardsShowVisible(false);
  };

  const handleCreateCard = (params, successCallback) => {
    console.log("handleCreateCard", params);
    axios.post("http://localhost:3000/cards.json", params).then((response) => {
      setCards([...cards, response.data]);
      successCallback();
    });
  };

  const handleUpdateCard = (id, params, successCallback) => {
    console.log("handleUpdateCard", params);
    axios.patch(`http://localhost:3000/cards/${id}.json`, params).then((response) => {
      setCards(
        cards.map((card) => {
          if (card.id === response.data.id) {
            return response.data;
          } else {
            return card;
          }
        })
      );
      successCallback();
      handleCloseCard();
    });
  };

  const handleDestroyCard = (card) => {
    console.log("handleDestroyCard", card);
    axios.delete(`http://localhost:3000/cards/${card.id}.json`).then(() => {
      setCards(cards.filter((p) => p.id !== card.id));
      handleCloseCard();
    });
  };

  const handleCreateCardDeck = (params, successCallback) => {
    console.log("handleCreateCardDeck", params);
    axios.post("http://localhost:3000/card_decks.json", params).then(() => {
      // setCardDecks([...card_decks, response.data]);
      successCallback();
    });
  };

  useEffect(handleIndexDecks, []);
  useEffect(handleIndexCards, []);

  return (
    <div>
      <Signup />
      <Login />
      <LogoutLink />
      <DecksIndex decks={decks} onShowDeck={handleShowDeck} />
      <Modal show={isDecksShowVisible} onClose={handleCloseDeck}>
        <DecksShow deck={currentDeck} onUpdateDeck={handleUpdateDeck} onDestroyDeck={handleDestroyDeck} />
      </Modal>
      <DecksNew onCreateDeck={handleCreateDeck} />
      <CardsIndex cards={cards} onShowCard={handleShowCard} />
      <Modal show={isCardsShowVisible} onClose={handleCloseCard}>
        <CardsShow card={currentCard} onUpdateCard={handleUpdateCard} onDestroyCard={handleDestroyCard} />
      </Modal>
      <CardsNew onCreateCard={handleCreateCard} />
      <CardDeckForm onCreateCardDeck={handleCreateCardDeck} />
    </div>
  );
}
