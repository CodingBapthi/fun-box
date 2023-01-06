import './App.css';
import Example from "./components/Example";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>fun-box</h1>
          <p>Dieses Repo, enthält Codebeispiele. Die Beispiele sind in verschiedenen Branches abgelegt, sodass nach auschecken dieser die Beispiele ausgeführt werden können. Folgen  sie hierfür der Anleitung in der README.md im Repo...</p>
          <Example />
      </header>
    </div>
  );
}

export default App;
