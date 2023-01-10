import Card from "./Card";
import MissingBits from "./MissingBits";

const Solution = () => {

	const data = {
		date: 'Jan 9, 2023',
		topic: 'JavaScript',
		title: 'Component Solution',
		description: 'Beschreibung der Aufgabe!',
		code: `const handleMissingBits = () => {
\t\tif (!nums) return;
\t\tconst numList = nums.split(',').map(num => parseInt(num)).sort((a, b) => a - b);
\t\tlet temp = []
\t\tfor (let i = 0; i < numList.length; i++) {
\t\t\tif (i === 0) {
\t\t\t\ttemp.push(numList[i]);
\t\t\t} else {
\t\t\t\tlet diff = numList[i] - numList[i - 1];
\t\t\t\tif (diff > 1) {
\t\t\t\t\ttemp.push("...");
\t\t\t\t} else if (diff === 2) {
\t\t\t\t\ttemp.push(numList[i - 1] + 1);
\t\t\t\t}
\t\t\t\ttemp.push(numList[i]);
\t\t\t}
\t\t}
\t\tsetResult(temp);
\t}`,
		link: 'https://github.com/CodingBapthi/fun-box/tree/cassido/missingBits'
	}

	return (
		<>
			<Card data={data}/>
			<hr className="w-48 h-1 mx-auto my-4 bg-blue-800 border-0 rounded md:my-10 dark:bg-blue-700" />
			<MissingBits />
		</>
	)
}

export default Solution;
