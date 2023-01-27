import Card from "./Card";
import SpinWheel from "./spinWheel/SpinWheel";
const Solution = () => {

	const data = {
		date: 'Jan 9, 2023',
		topic: 'JavaScript',
		title: 'Lösungsweg',
		description: 'Beschreibung der Aufgabe!',
		code: `import React, { useState } from 'react';
import './SpinWheel.css';

function SpinWheel() {
\tconst [player, setPlayer] = useState({ money: 100 });
\tconst [bet, setBet] = useState(0);
\tconst [result, setResult] = useState(null);

\tconst handleBet = (event) => {
\t\tsetBet(event.target.value);
\t}

\tconst spin = () => {
\t\t// check if player has enough money
\t\tif (player.money < bet) {
\t\t\tsetResult("You don't have enough money to place this bet. Please enter a lower amount.");
\t\t\treturn;
\t\t}
\t\t// subtract bet from player's money
\t\tlet originalMoney = player.money
\t\tsetPlayer({...player, money: player.money - bet});

\t\t// generate random number between 0 and 2
\t\tconst spinNumber = Math.floor(Math.random() * 3);

\t\tif (spinNumber === 0) {
\t\t\tsetPlayer({...player, money: originalMoney});
\t\t\tsetResult("You keep your money!");
\t\t} else if (spinNumber === 1) {
\t\t\tsetPlayer({...player, money: originalMoney + bet * 2});
\t\t\tsetResult("You won double your money!");
\t\t} else {
\t\t\tsetResult("You lost your money!");
\t\t}
\t}

\tconst reset = () => {
\t\tsetPlayer({ money: 100 });
\t\tsetBet(0);
\t\tsetResult(null);
\t}

\treturn (
\t\t<div className="spin-wheel">
\t\t\t// remove () from $ to display the value of player.money
\t\t\t<h1>Player's Money: ($){player.money}</h1>
\t\t\t<form>
\t\t\t\t<label>Enter Bet Amount:</label>
\t\t\t\t<input type="number" onChange={handleBet} value={bet} min="0" />
\t\t\t</form>
\t\t\t<button className="spin-button" onClick={spin} disabled={bet === 0}>Spin</button>
\t\t\t<button className="reset-button" onClick={reset}>Reset</button>
\t\t\t<p className="result">{result}</p>
\t\t</div>
\t);
}

export default SpinWheel;
`,
		link: 'https://github.com/CodingBapthi/fun-box/tree/cassido/spin-wheel',
	}

	return (
		<>
			<Card data={data}/>
			<hr className="w-48 h-1 mx-auto my-4 bg-blue-800 border-0 rounded md:my-10 dark:bg-blue-700" />
			<SpinWheel />
		</>
	)
}

export default Solution;
