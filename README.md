# <h1 style="text-align: center;">`Typescript Card Game 🃏`</h1>

---

A simple terminal card game written in Typescript. Set the number of players, the size of each players hand and how many rounds. 

Each round you will be able to see what cards each players has and their scores. Then, after each round see the player that had the highest and lowest hands. 

### Installation 

To install run the following command from your terminal:
```
$ git clone https://github.com/cornfrog/card-game-ts
```

## Usage
1. To get started using Token Tracker first go into the **root** directory, and install all dependencies with `yarn`:
```
$ cd ./card-game-ts/
$ yarn install
```
2. To run the game, enter the following `yarn` command:
```
$ yarn run start
``` 

## Demo 
After running `yarn run start`
```
yarn start
yarn run v1.22.21
$ yarn run clean && yarn run compile && node .
$ rm -rf build
$ tsc
=========== Settings ============
Number of Players: 3
Each player gets 2 cards.
Number of Rounds: 3
=================================
======= Round 1: =======
Player 1:
5♣
J♥
16
Player 2:
1♦
8♦
9
Player 3:
5♠
2♣
7
Top Score: 16 | Player 1 wins!
Bottom Score: 7 | Player 3 has no luck!
========================


======= Round 2: =======
Player 1:
8♥
6♦
14
Player 2:
3♠
7♠
10
Player 3:
10♥
5♥
15
Top Score: 15 | Player 3 wins!
Bottom Score: 10 | Player 2 has no luck!
========================


======= Round 3: =======
Player 1:
5♦
8♠
13
Player 2:
10♣
K♦
23
Player 3:
2♥
3♥
5
Top Score: 23 | Player 2 wins!
Bottom Score: 5 | Player 3 has no luck!
========================

```

## Contributing
Bug reports and pull requests are welcome here at [https://github.com/cornfrog/card-game-ts](https://github.com/cornfrog/card-game-ts). Please use the fork-and-branch workflow.