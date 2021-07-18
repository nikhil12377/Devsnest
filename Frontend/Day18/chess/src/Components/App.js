import "./Style.css";
import Card from './Card';

function App() {
  var squares = []
  for (var i = 0; i < 64; i++) {
    squares.push(i)
  }
  var cardItems = squares.map(item => {
    return <Card num={item} key={item} />
  })
  return (
    <div className="App">
      <div className="bord">

        {cardItems}

      </div>
    </div>
  );
}

export default App;
