import Prism from 'prismjs';
import { useEffect } from "react";
import Card from "./Card";
const Solution = () => {
	useEffect(() => {
		Prism.highlightAll();
	}, []);
	const sumEveryOther = num => {
		num = num.toString();
		let sum = 0;
		for (let i = 1; i < num.length; i += 2) {
			sum += Number(num[i]);
		}
		return sum;
	}

	const runFunction = () => {
		let numberValue = document.getElementById('numberValue');
		let sumEveryOtherValue = numberValue.value;
		let solution = document.getElementById('solution');
		solution.innerHTML = sumEveryOther(sumEveryOtherValue);
	}

	const data = {
		date: 'Jan 9, 2023',
		topic: 'JavaScript',
		title: 'Lösung der Aufgabe sumEveryOther',
		description: 'Die übergebene Zahl wird in einen String umgewandelt und dann in einer for Schleife wird jede 2 Zahl addiert. Die Aufgabe ist aus dem Cassidoo Newsletter',
		code: `const sumEveryOther = num => {
num = num.toString();
let sum = 0;
for (let i = 1; i < num.length; i += 2) {
sum += Number(num[i]);
}
return sum;
}`,
		link: 'https://githubbox.com/CodingBapthi/fun-box/blob/cassidoo/sumEveryOther/README.mdhttps://githubbox.com/CodingBapthi/fun-box/blob/cassidoo/sumEveryOther/README.md'
	}

	return (
		<>
			<Card data={data}/>

			<div className="w-full flex flex-col items-center">
				<h2 className="text-center">Lösung der Aqufgabe</h2>
				<div className="w-full md:w-1/2 lg:w-1/3 flex flex-col items-center p-4">
					<input type="text" className="w-full text-gray-800 p-2 rounded-md focus:outline-none focus:shadow-outline" id="numberValue" />
					<button className="w-full md:w-1/2 lg:w-1/3 py-2 rounded-md bg-yellow-500 text-gray-200 hover:bg-yellow-600 focus:outline-none focus:shadow-outline" onClick={runFunction}>Lösung</button>
					<p id="solution" className="text-xl font-bold mt-4"></p>
				</div>
			</div>
		</>
	)
}

export default Solution;
