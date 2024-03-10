import Card from "./Card.js";
import _ from "lodash";
class Deck {
    cards: Card[];
    constructor() {
        this.cards = this.buildDeck();
    }

    printDeck(): void {
        this.cards.reverse().forEach((card: Card) => {
            console.log(card.printCard());
        });
    }

    deal(): Card {
        return this.cards.pop()!;
    }

    buildDeck (): Card[] {
        const builtDeck: Card[] = [];
        const suits: string[] = ['♦', '♣', '♠', '♥'];
        suits.forEach((suit: string): void => {
            for (let i: number = 1; i <= 13; i++) {
                builtDeck.push(new Card(suit, i));
            }
        });
        return _.shuffle(builtDeck);
    }
}

export default Deck;