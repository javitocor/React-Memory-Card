import React from "react";
import '../style/Header.css';

const Header = (props) => {
  const {score, bestScore} = props;

  return (
    <header className="header bg-success mb-1 text-dark d-flex justify-content-between">
      <div>
        <h2 className="p-2">Snooker Memory Game</h2>
      </div>
      <div className="p-2 mr-3">
        <ul className="list-inline font-weight-bolder">
          <li className="list-inline-item">Score: {score}</li>
          <li className="list-inline-item">Best Score: {bestScore}</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
