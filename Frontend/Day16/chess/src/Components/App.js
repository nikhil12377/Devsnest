import "./Style.css";
import FirstCard from './FirstCard'
import SecondCard from './SecondCard'

function App() {

  const FirstRow = () => {
    return (
      <>
        <FirstCard />
        <SecondCard />
        <FirstCard />
        <SecondCard />
        <FirstCard />
        <SecondCard />
        <FirstCard />
        <SecondCard />
      </>
    )
  }
  const SecondRow = () => {
    return (
      <>
        <SecondCard />
        <FirstCard />
        <SecondCard />
        <FirstCard />
        <SecondCard />
        <FirstCard />
        <SecondCard />
        <FirstCard />
      </>
    )
  }
  return (
    <div className="App">
      <div className="bord">
        <FirstRow />
        <SecondRow />
        <FirstRow />
        <SecondRow />
        <FirstRow />
        <SecondRow />
        <FirstRow />
        <SecondRow />

      </div>
    </div>
  );
}

export default App;
