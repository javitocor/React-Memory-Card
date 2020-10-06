import React from "react";

const Header = (props) => {
  const {score, bestScore} = props;

  return (
    <header>
      <div>
        <h2></h2>
      </div>
      <div>
        <ul>
          <li>Score: {score}</li>
          <li>Best Score: {bestScore}</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
