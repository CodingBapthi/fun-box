import Card from "./Card";

const Solution = () => {

	const data = {
		date: 'Jan 9, 2023',
		topic: 'JavaScript',
		title: 'Name der Aufgabe',
		description: 'Beschreibung der Aufgabe!',
		code: `const Example = (...props) => {true};`,
		link: '#'
	}

	return (
		<>
			<Card data={data}/>
		</>
	)
}

export default Solution;
