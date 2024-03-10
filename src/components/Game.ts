import Deck from "./Deck.js";
import Player from "./Player.js";

class Game {
    playerCount: number;
    playerHandSize: number;
    deck: Deck;
    players: Player[];
    roundCount: number;
    constructor(playerCount: number, playerHandSize: number, roundCount: number) {
        this.playerHandSize = playerHandSize;
        this.playerCount = playerCount;
        this.deck = new Deck();
        this.players = this.makePlayers(playerCount);
        this.roundCount = roundCount;
    }

    start(): void {
        for (let i: number = 1; i <= this.roundCount; i++) {
            console.log(`======= Round ${i}: =======`);
            this.showPlayersHand();
            this.resetPlayers();
            console.log(`========================`);
            console.log(`\n`);
        }
    }

    resetPlayers(): void {
        this.players.forEach((player: Player) => {
            player.hand = [];
            player.score = 0;
        });
    }

    showPlayersHand(): void {
        this.dealToPlayers()
        this.players.forEach((player: Player, index: number) => {
            console.log(`Player ${index + 1}:`);
            player.printHand();
            console.log(player.getScore());
        });
        this.getMaxHand();
        this.getMinHand();
    }

    getMaxHand(): void {
        let winningPlayerIndex: number = 0;
        for(let i: number = 1; i < this.playerCount; i++){
            if(this.players[winningPlayerIndex]!.score < this.players[i]!.score) {
                winningPlayerIndex = i
            }
        }
        console.log(`Top Score: ${this.players[winningPlayerIndex]!.score} | Player ${winningPlayerIndex + 1} wins!`)
    }

    getMinHand(): void {
        let winningPlayerIndex: number = 0;
        for(let i: number = 1; i < this.playerCount; i++){
            if(this.players[winningPlayerIndex]!.score > this.players[i]!.score) {
                winningPlayerIndex = i
            }
        }
        console.log(`Bottom Score: ${this.players[winningPlayerIndex]!.score} | Player ${winningPlayerIndex + 1} has no luck!`)
    }

    dealToPlayers(): void {
        for (let i: number = 0; i < this.playerHandSize; i++) {
            this.players.forEach((player: Player) => {
                player.hand.push(this.deck.deal());
            });
        }
    }

    makePlayers(playerCount: number): Player[] {
        const players: Player[] = []
        for (let i: number = 0; i < playerCount; i++) {
            players.push(new Player())
        }
        return players
    }
}

export default Game;