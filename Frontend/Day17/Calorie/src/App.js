import "./App.css";
import Card from "./Components/Card";

function App() {
  return (
    <div className="box">
      <h1 className="head">Calorie Read Only</h1>
      <div className="App">

        <Card name="Pizza" cal="56" />
        <Card name="Burger" cal="69" />
        <Card name="Coke" cal="600" />
        <Card name="Browne" cal="180" />
        <Card name="Fried Rice" cal="90" />
        <Card name="Lassania" cal="200" />
        <Card name="Pani Puri" cal="10" />
      </div>
    </div>
  );
}

export default App;
