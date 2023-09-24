import { useRef, useState } from 'react';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { addcounter } from './features/conterSlice';



function App() {

  const dispatch = useDispatch()

    const refStore = useSelector(state => state.addcounterStore.value)

  const [count,setCount] = useState(0)
  const ref = useRef(0)

const incrementHandler = ()=>{

  ref.current = ref.current + 1
  setCount(count+1)

  dispatch(addcounter(count))
 
}

console.log(refStore)

// console.log(ref.current)

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
