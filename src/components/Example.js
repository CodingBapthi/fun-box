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
		description: 'You are given a list of positive integers which represents some range of integers which has been truncated. Find the missing bits, insert ellipses to show that that part has been truncated, and print it. If the consecutive values differ by exactly two, then insert the missing value. You are given a list of positive integers which represents some range of integers which has been truncated. Find the missing bits, insert ellipses to show that that part has been truncated, and print it. If the consecutive values differ by exactly two, then insert the missing value.',
		code: `> missingBits([1,2,3,4,20,21,22,23])
> "[1,2,3,4,...,20,21,22,23]"

> missingBits([1,2,3,5,6])
> "[1,2,3,4,5,6]"

> missingBits([1,3,20,27])
> "[1,2,3,...,20,...,27]"`,
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