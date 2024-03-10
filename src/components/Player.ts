import Card from "./Card.js";
class Player {
    hand: Card[];
    score: number;
    constructor() {
        this.hand = [];
        this.score = 0;
    }

    getScore(): number {
        this.hand.forEach((card: Card) => {
            this.score = this.score + card.value;
        });
        return this.score;
    }

    printHand(): void {
        this.hand.forEach((card: Card) => {
            console.log(card.printCard());
        });
    }
}

export default Player