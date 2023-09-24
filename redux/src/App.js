import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [count,setCount] = useState(0)
  const ref = useRef(0)

const incrementHandler = ()=>{

  ref.current = ref.current + 1
}

console.log(ref.current)
  return (
    <div className="App">
      <header className="App-header">

      <h1>{count}</h1>
      <button onClick={incrementHandler}>increment</button>
      
      </header>
    </div>
  );
}

export default App;
