import Navbar from "./components/NavBar/Navbar";
import './App.css'
import { Data } from "./components/Data/data";
import Intro from "./components/Intro/Intro";

function App() {
  return (
    <div className="App">
      <Navbar data={Data.filter(items => items.itemKey === "Navbar")[0].items} />
      <Intro data={Data.filter(items => items.itemKey === "Intro")[0].items} />
    </div>
  );
}

export default App;
