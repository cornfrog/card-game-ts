class Card {
    suit;
    value;
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
    printCard() {
        let displayValue;
        if (this.value === 11) {
            displayValue = 'J';
        }
        else if (this.value === 12) {
            displayValue = 'Q';
        }
        else if (this.value === 13) {
            displayValue = 'K';
        }
        else {
            displayValue = this.value;
        }
        return `${displayValue}${this.suit}`;
    }
}
export default Card;
