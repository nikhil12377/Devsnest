import "./App.css";
import { useState } from 'react'

const DisplayData = ({ index, item, data, setItem }) => {
  return <div className="container">

    <div className="card">
      <h1>{data.name}</h1>
      <h2>you have consumed {data.cal} cals today</h2>
      <button onClick={() => {

        const newItem = item.filter((e) => {
          return e.cal !== data.cal;
        })
        setItem(newItem)

      }}>delete</button>
    </div>
        );

  </div>
}
function App() {
  const data = [
    {
      name: "pizza",
      cal: "56"
    },
    {
      name: "Burger",
      cal: "69"
    },
    {
      name: "Coke",
      cal: "600"
    },
    {
      name: "Browne",
      cal: "180"
    },
    {
      name: "Fried Rice",
      cal: "90"
    },
    {
      name: "Lassania",
      cal: "200"
    },
    {
      name: "Pani Puri",
      cal: "10"
    },
  ]


  var [item, setItem] = useState(data)

  return (
    <div className="box">
      <h1 className="head">Calorie Read Only</h1>
      <div className="App">

        {

          (item.length === 0) ? <h1 >No Entry</h1> :

            item.map((e, index) => {
              return <DisplayData key={index} item={item} data={e} setItem={setItem} />
            })}


      </div>
    </div>
  );
}

export default App;
