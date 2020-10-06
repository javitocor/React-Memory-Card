import React, { useState, useEffect } from "react";
import Header from './Header';
import Display from './Display';

const App = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clicked, setClicked] = useState([]);

  useEffect(() => {
    if(score >= bestScore) {
      incrementBestScore();
    }
  })

  const incrementScore = () => {
    setScore(score + 1);
  };

  const incrementBestScore = () => {
    setBestScore(score);
  };

  const check = () => {
    if(score === 12) {
      return true;
    }
    return false;
  };

  const memory = (id) =>{
    if(clicked.includes(id) === false) {
      incrementScore();
      setClicked([...clicked, id]);      
    } else {
      setScore(0);
      setClicked([]);
    }
  };

  return (
    <div className="App">
      {check() ? (<div><h1>Congratulations!!!</h1></div>) :
      (<div><Header score={score} bestScore={bestScore}/>
      <Display memory={memory} score={score}/></div>)
    }
    </div>
  );
}

export default App;
