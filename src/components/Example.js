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
				<code>Evt Code beispiele zur Aufgabe</code>
			</div>
			<Solution name="World"/>
		</>
	)
};

export default Example;