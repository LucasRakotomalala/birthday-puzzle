'use strict';

const urlParams = new URLSearchParams(window.location.search);
const difficulty = urlParams.get('difficulty') || 2;
const cheat = urlParams.get('cheat') || false;
console.log(difficulty, cheat);

const game = new Puzzle({
  tileSize: 120, // width and height of the tile
  columns: 3,
  rows: 4,
  difficulty: Number(difficulty),
  scale: 0.992, // Determines the scale of the tiles. As scale value less than 1 reveals gridlines
  image: {
    url: './images/puzzle.jpg',
    preserve: 'width', //['width', 'height'] the width or height will be preserved
    offset: 0
  }
});

game.render('puzzle');

if (cheat !== 'true') { 
  game.start();

  game.onSolve((_event) => {
    alert('Bien joué! Tu as remporté la première épreuve! Voici la carte complète.');
  });
}