import React from 'react';
import './App.css';
// import { Counter } from './Components/Counter';
// import { Example } from './Components/Example';
import { Todo } from './Components/Todo';

function App() {
  
  const [showCounter, setShowCounter] = React.useState(false)

  return (
    <div className="App">
      {/* {showCounter && <Counter/>}
      <br />
      <button onClick={() => setShowCounter(!showCounter) } >Show</button> 
      <Example /> */}
      <Todo />
    </div>
  );
}

export default App;
