import Prism from 'prismjs';
import Solution from './Solution';
import {useEffect} from "react";
import Card from "./Card";

// Die Aufgaben sind so zu lösen, das über die nutzung der Komponenten die Aufgabe ausgegeben werden kann
// und die Lösung dargestellt wird. In der Example wird die Aufgabe erstellt und alle Informationen hierzu mit eingebunden.
// Die Lösung wird in dieser als Komponente mit eingebunden.
const Example = () => {
	useEffect(() => {
		Prism.highlightAll();
	}, []);

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
			<hr className="w-48 h-1 mx-auto my-4 bg-blue-800 border-0 rounded md:my-10 dark:bg-blue-700" />
			<Solution name="World"/>
		</>
	)
};

export default Example;