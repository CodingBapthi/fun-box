import Prism from 'prismjs';
import Solution from './Solution';
import {useEffect} from "react";

// Die Aufgaben sind so zu lösen, das über die nutzung der Komponenten die Aufgabe ausgegeben werden kann
// und die Lösung dargestellt wird. In der Example wird die Aufgabe erstellt und alle Informationen hierzu mit eingebunden.
// Die Lösung wird in diser als Komponente mit eingebunden.
const code = `const Example = (...props) => {true};`;
const Example = () => {
	useEffect(() => {
		Prism.highlightAll();
	}, []);
	return (
		<>
			<div className="py-8 text-center">
				<h2>Name der Aufgabe</h2>
				<p>Beschreibung der aufgabe</p>
				<div className="mx-auto my-auto flex justify-center items-center">
					<pre>
						<code className="language-js">
							{code}
						</code>
					</pre>
				</div>
			</div>
			<Solution name="World"/>
		</>
	)
};

export default Example;