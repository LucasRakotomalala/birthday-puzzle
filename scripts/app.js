'use strict';

const urlParams = new URLSearchParams(window.location.search);
const difficulty = urlParams.get('difficulty');
const cheat = urlParams.get('cheat') === 'true' || urlParams.get('cheat') === '1';

const game = new Puzzle({
  tileSize: 120,
  columns: 3,
  rows: 4,
  difficulty: Number(difficulty) || 1,
  scale: 0.994,
  image: {
    url: './images/puzzle.jpg',
    preserve: 'width',
    offset: 0
  }
});

game.render('puzzle');

if (!cheat) { 
  game.start();

  game.onSolve((_event) => {
    alert('Bien joué! Tu as remporté la première épreuve!\nVoici la carte complète.');
  });
} else {
  alert('Mode triche activé!\nVoici la carte complète.');
}