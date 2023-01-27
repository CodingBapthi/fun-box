import React, { useState } from 'react';
import './SpinWheel.css';

function SpinWheel() {
	const [player, setPlayer] = useState({ money: 100 });
	const [bet, setBet] = useState(0);
	const [result, setResult] = useState(null);

	const handleBet = (event) => {
		setBet(event.target.value);
	}

	const spin = () => {
		// check if player has enough money
		if (player.money < bet) {
			setResult("You don't have enough money to place this bet. Please enter a lower amount.");
			return;
		}
		// subtract bet from player's money
		let originalMoney = player.money
		setPlayer({...player, money: player.money - bet});

		// generate random number between 0 and 2
		const spinNumber = Math.floor(Math.random() * 3);

		if (spinNumber === 0) {
			setPlayer({...player, money: originalMoney});
			setResult("You keep your money!");
		} else if (spinNumber === 1) {
			setPlayer({...player, money: originalMoney + bet * 2});
			setResult("You won double your money!");
		} else {
			setResult("You lost your money!");
		}
	}

	const reset = () => {
		setPlayer({ money: 100 });
		setBet(0);
		setResult(null);
	}

	return (
		<div className="spin-wheel">
			<h1>Player's Money: ${player.money}</h1>
			<form>
				<label>Enter Bet Amount:</label>
				<input type="number" onChange={handleBet} value={bet} min="0" />
			</form>
			<button className="spin-button" onClick={spin} disabled={bet === 0}>Spin</button>
			<button className="reset-button" onClick={reset}>Reset</button>
			<p className="result">{result}</p>
		</div>
	);
}

export default SpinWheel;
