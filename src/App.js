import './App.css';
import Example from "./components/Example";

function App() {
  return (
    <div className="bg-gray-800  text-gray-200 p-4 rounded-md">
      <header className="text-center text-2xl font-bold">
        <h1 className="text-yellow-500">fun-box</h1>
          <p className="text-base">Dieses Repo, enthält Codebeispiele. Die Beispiele sind in verschiedenen Branches abgelegt, sodass nach auschecken dieser die Beispiele ausgeführt werden können. Folgen  sie hierfür der Anleitung in der README.md im Repo...</p>
      </header>
      <Example />
    </div>
  );
}

export default App;
