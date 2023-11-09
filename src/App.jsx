import { useState, useEffect } from "react";



const App = () => {
  const [userInput, setUserInput] = useState("");
  const [randomInput, setRandomInput] = useState("");

 

  const fibNumber = useMemo(() => fib(userInput), [userInput, fib]);

  const myArray = useMemo(() => getArray(), []);

  useEffect(() => {
    console.log("New Array");
  }, [myArray]);

  return (
    <main className="App">
      <label>Fibonacci Sequence:</label>
      <input
        type="text"
        placeholder="position"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <p>Number: {fibNumber || "--"}</p>

      <br />
      <br />

      <label> Random Input:</label>
      <input
        type="text"
        value={randomInput}
        placeholder="Type anything"
        onChange={(e) => setRandomInput(e.target.value)}
      />
      <p>Result: {randomInput}</p>
    </main>
  );
};

export default App;
