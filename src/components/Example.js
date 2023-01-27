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
		date: 'Jan 22, 2023',
		topic: 'JavaScript',
		title: 'Spin Wheel Challenge',
		description: 'Implement a “spin the wheel” game where the player can bet on each spin of a wheel and either double their money, lose their money, or keep their money.',
		code: `noExample`,
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