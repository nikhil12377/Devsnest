import Counter from "./Counter";

function App() {
  return (
    <>
      <p>
        There are 4 counter component instances that each manage their own
        state.
      </p>

      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </>
  );
}

export default App;
