class Player {
    hand;
    score;
    constructor() {
        this.hand = [];
        this.score = 0;
    }
    getScore() {
        this.hand.forEach((card) => {
            this.score = this.score + card.value;
        });
        return this.score;
    }
    printHand() {
        this.hand.forEach((card) => {
            console.log(card.printCard());
        });
    }
}
export default Player;
