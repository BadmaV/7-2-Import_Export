// TODO: write your code here


// import sum from './basic';

// console.log('worked');

// console.log(sum([1, 2]));


// импорт Game, GameSavingData и функции readGameSaving, writeGameSaving (переименуйте в loadGame и saveGame)
import game, { GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from './game.js';


const game = new Game();
game.start();
