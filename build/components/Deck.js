import Card from "./Card.js";
import _ from "lodash";
class Deck {
    cards;
    constructor() {
        this.cards = this.buildDeck();
    }
    printDeck() {
        this.cards.reverse().forEach((card) => {
            console.log(card.printCard());
        });
    }
    deal() {
        return this.cards.pop();
    }
    buildDeck() {
        const builtDeck = [];
        const suits = ['♦', '♣', '♠', '♥'];
        suits.forEach((suit) => {
            for (let i = 1; i <= 13; i++) {
                builtDeck.push(new Card(suit, i));
            }
        });
        return _.shuffle(builtDeck);
    }
}
export default Deck;
