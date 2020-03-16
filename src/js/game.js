import { Character } from './courseUtils.js';

// Экспорт из модуля game класса Game в качестве дефолтного
const game = { class Game {} };
export default game;

// Экспорт из модуля game класса GameSavingData {} и 
// функции readGameSaving()
export { GameSavingData {}, readGameSaving() };




class Game {
  start() {
    console.log('game started');
  }
}

class GameSavingData {
}

function readGameSaving() {
}

// экспорт функции writeGameSaving()
export function writeGameSaving() { 
}