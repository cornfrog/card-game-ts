class Card {
    suit: string;
    value: number;
    constructor(suit: string, value: number) {
        this.suit = suit;
        this.value = value;
    }

    printCard(): string {
        let displayValue: number | string;
        if (this.value === 11) {
            displayValue = 'J';
        } else if (this.value === 12) {
            displayValue = 'Q';
        } else if (this.value === 13) {
            displayValue = 'K';
        } else {
            displayValue = this.value
        }
        return `${displayValue}${this.suit}`;
    }
}
export default Card;