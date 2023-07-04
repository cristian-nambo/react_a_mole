import './App.css';
import { useState } from 'react';
import MoleContainer from './components/MoleContainer';


// Stores the score state variable
// A function to generate nine MoleContainers


function App() {
  let [score, setScore] = useState (0)

  const createMoleHill = () => {
    let hills = []
    for(let i = 0; i < 9; i++) {
      hills.push(<MoleContainer key={i} setScore={setScore} score={score} />)
      
    }
    return (
      <div>
        {hills}
      </div>
    )

  }
  return (
      <div classname="App">
          <h1>React-a-Mole!</h1>
          {score}
          {createMoleHill()}
      </div>
  );
}

export default App;
