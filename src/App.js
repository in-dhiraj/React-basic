import { useState } from "react";
import "./styles.css"
import Heading from "./Components/Heading";
import Para from "./Components/Para";
import Card from "./Components/Card"

function App() {

  const [value, setValue] = useState(10)

  return (
    <div className="App">
      {/* <Heading data={"Hello Developers"} value={value} />
      <Para data={"Welcome to the Course"}/>
      
      <button onClick={()=>{ setValue(value-1) }} > - </button>
      <button onClick={()=>{ setValue(value+1) }} > + </button> */}

      <Card/>
    </div>
  );
}

export default App;
