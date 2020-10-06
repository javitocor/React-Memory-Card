import React, { useState } from "react";
import Header from './Header';
import Display from './Display';

const App = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const incrementScore = () => {
    setScore(score + 1);
  };

  const incrementBestScore = () => {
    setBestScore(bestScore + 1);
  };

  return (
    <div className="App">
      <Header score={score} bestScore={bestScore}/>
      <Display />
    </div>
  );
}

export default App;
