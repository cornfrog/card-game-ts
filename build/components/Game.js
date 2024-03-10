import Deck from "./Deck.js";
import Player from "./Player.js";
class Game {
    playerCount;
    playerHandSize;
    deck;
    players;
    roundCount;
    constructor(playerCount, playerHandSize, roundCount) {
        this.playerHandSize = playerHandSize;
        this.playerCount = playerCount;
        this.deck = new Deck();
        this.players = this.makePlayers(playerCount);
        this.roundCount = roundCount;
    }
    start() {
        for (let i = 1; i <= this.roundCount; i++) {
            console.log(`======= Round ${i}: =======`);
            this.showPlayersHand();
            this.resetPlayers();
            console.log(`========================`);
            console.log(`\n`);
        }
    }
    resetPlayers() {
        this.players.forEach((player) => {
            player.hand = [];
            player.score = 0;
        });
    }
    showPlayersHand() {
        this.dealToPlayers();
        this.players.forEach((player, index) => {
            console.log(`Player ${index + 1}:`);
            player.printHand();
            console.log(player.getScore());
        });
        this.getMaxHand();
        this.getMinHand();
    }
    getMaxHand() {
        let winningPlayerIndex = 0;
        for (let i = 1; i < this.playerCount; i++) {
            if (this.players[winningPlayerIndex].score < this.players[i].score) {
                winningPlayerIndex = i;
            }
        }
        console.log(`Top Score: ${this.players[winningPlayerIndex].score} | Player ${winningPlayerIndex + 1} wins!`);
    }
    getMinHand() {
        let winningPlayerIndex = 0;
        for (let i = 1; i < this.playerCount; i++) {
            if (this.players[winningPlayerIndex].score > this.players[i].score) {
                winningPlayerIndex = i;
            }
        }
        console.log(`Bottom Score: ${this.players[winningPlayerIndex].score} | Player ${winningPlayerIndex + 1} has no luck!`);
    }
    dealToPlayers() {
        for (let i = 0; i < this.playerHandSize; i++) {
            this.players.forEach((player) => {
                player.hand.push(this.deck.deal());
            });
        }
    }
    makePlayers(playerCount) {
        const players = [];
        for (let i = 0; i < playerCount; i++) {
            players.push(new Player());
        }
        return players;
    }
}
export default Game;
