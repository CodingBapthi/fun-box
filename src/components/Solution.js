import Card from "./Card";

const Solution = () => {

	const data = {
		date: 'Jan 9, 2023',
		topic: 'JavaScript',
		title: 'Lösungsweg',
		description: 'Beschreibung der Aufgabe!',
		code: `const Solution = (...props) => {true};`,
		link: 'Link to Codesandbox'
	}

	return (
		<>
			<Card data={data}/>
		</>
	)
}

export default Solution;
