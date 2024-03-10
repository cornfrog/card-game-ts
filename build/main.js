import Game from "./components/Game.js";
const playerCount = 3; // for increasing or decreasing the player count
const playerHandSize = 2; // for increasing or decreasing how many cards the player can have
const roundCount = 3; // for increasing or decreasing how many rounds are played
const game = new Game(playerCount, playerHandSize, roundCount);
console.log(`=========== Settings ============`);
console.log(`Number of Players: ${playerCount}`);
console.log(`Each player gets ${playerHandSize} cards.`);
console.log(`Number of Rounds: ${roundCount}`);
console.log(`=================================`);
game.start();
