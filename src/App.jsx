import { useState, useRef } from "react";

const App = () => {
  const [randomInput, setRandomInput] = useState("");
  const [Seconds, setSeconds] = useState(0);

  const renders = useRef(0)

  const inputRef = useRef()

  const handleInputChange = (e) => {
    setRandomInput(e.target.value)

    renders.current++
  }

  //const focusOnInput = () =>{
    //inputRef.current.focus()
 // }



  return (
    <main className="App">
      <input
      ref={inputRef}
      onChange={handleInputChange}
        type="text"
        value={randomInput}
        placeholder="Type anything"
      
      />
      <p>Renders: {renders.current}</p>

      <br />
      <br />

      <section>
      
        <button>Start</button>
        <button>Stop</button>
      </section>

      <button>Reset</button>

      <br/>
      <br/>

      <p>Seconds:</p>

      <br/>
      <br/>

      <p>{randomInput}</p>
    </main>
  );
};

export default App;
