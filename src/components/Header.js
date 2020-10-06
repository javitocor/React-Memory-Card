import React from "react";
import '../style/Header.css';

const Header = (props) => {
  const {score, bestScore} = props;

  return (
    <header className="header bg-success mb-1 text-dark d-flex justify-content-between">
      <div>
        <h2></h2>
      </div>
      <div>
        <ul className="list-inline">
          <li className="list-inline-item">Score: {score}</li>
          <li className="list-inline-item">Best Score: {bestScore}</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
