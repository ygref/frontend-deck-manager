# Magic the Gathering Deck Manager

Browser based application for deck management and card management.  
Streamlined for MTG players with QoL in mind.

The user can login and create decks, utilize the frontend API to search for card by name, and add the card via pulldown
by quantity to a specific deck. On the deck page the cards display minimal information for ease, and on button click
will display in-depth info on the card.

React + Vite, Ruby + Rails, PostgreSQL database, Utilized API: Scryfall API.

## Frontend

## Installation

```bash
npm install
npm install axios --save
```

## Usage

```bash
npm run dev
```

## Roadmap

Implement single-button login / OAuth for users for QoL.
Implement Pagination in API search.
Implement an images table that allows the user to go to a specific card and visually see all possible card images,
this would be especially helpful to cards in alternate languages.
Implement more robust pricing logic, to be able to cross reference prices from multiple sources without visual clutter.

<img src="https://github.com/ygref/magic-deck-manager/blob/main/allcards.png?raw=true" alt="All Cards" width="250" /> 
<img src="https://github.com/ygref/magic-deck-manager/blob/main/cardinfo.png?raw=true" alt="Card Info" width="250" /> 
<img src="https://github.com/ygref/magic-deck-manager/blob/main/decks.png?raw=true" alt="Decks" width="250" /> 
<img src="https://github.com/ygref/magic-deck-manager/blob/main/deckmodal.png?raw=true" alt="Deck Modal" width="250" /> 
<img src="https://github.com/ygref/magic-deck-manager/blob/main/griselbrand.png?raw=true" alt="Griselbrand" width="250" />
