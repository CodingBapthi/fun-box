import React, { useState } from 'react';

function MissingBits() {
	const [nums, setNums] = useState('');
	const [result, setResult] = useState([]);

	const handleMissingBits = () => {
		if (!nums) return;
		const numList = nums.split(',').map(num => parseInt(num)).sort((a, b) => a - b);
		let temp = []
		for (let i = 0; i < numList.length; i++) {
			if (i === 0) {
				temp.push(numList[i]);
			} else {
				let diff = numList[i] - numList[i - 1];
				if (diff > 1) {
					temp.push("...");
				} else if (diff === 2) {
					temp.push(numList[i - 1] + 1);
				}
				temp.push(numList[i]);
			}
		}
		setResult(temp);
	}

	return (
		<div>
			<input type="text" value={nums} onChange={e => setNums(e.target.value)} placeholder="Enter integers separated by commas" />
			<button onClick={handleMissingBits}>Find Missing Bits</button>
			<p>Result: [{result.join(',')}]</p>
		</div>
	);
}

export default MissingBits;
