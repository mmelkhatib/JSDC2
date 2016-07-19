var gamePrompt = require('game-prompt');
var colors = require('colors');

var playerName;
var srsvName;
var Planets = [
  {
  name: 'Earth',
  distance: 10
},
{
  name: 'Mesnides',
  distance: 20
},
{
  name: 'Kiyturn',
  distance: 120
},
{
  name: 'Cramuthea',
  distance: 200
},
{
  name: 'Smeon T9Q',
  distance: 400
},
{
  name: 'Gleshan 7Z9',
  distance: 85
}
];
var playerFuel = 1000;


function begin() {
  gamePrompt([
    'SRSV'.red,
    'Press ENTER to start'
  ], intro);
}

function intro() {
  gamePrompt([
    'You are the captain of a Solo Research Space Vehicle (S.R.S.V.) on an expedition to explore foreign planets.' +
    'Your mission is to make contact with three alien life forms, acquire an artifact representative of their culture, and bring back your findings to Earth.'
    '"What is your name?"'.bold
  ], saveName);
}

begin();
