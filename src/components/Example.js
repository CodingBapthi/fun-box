import Solution from './Solution';

// Die Aufgaben sind so zu lösen, das über die nutzung der Komponenten die Aufgabe ausgegeben werden kann
// und die Lösung dargestellt wird. In der Example wird die Aufgabe erstellt und alle Informationen hierzu mit eingebunden.
// Die Lösung wird in diser als Komponente mit eingebunden.
const Example = () => {
	return (
		<>
			<div>
				<h2>Name der Aufgabe</h2>
				<p>Beschreibung der aufgabe</p>
				<pre className="bg-gray-800 text-gray-200 p-4 rounded-md">
					<code className="text-xs">
						Hier wird der Code der Aufgabe dargestellt
					</code>
				</pre>
				<code>Evt Code beispiele zur Aufgabe</code>
			</div>
			<Solution name="World"/>
		</>
	)
};

export default Example;