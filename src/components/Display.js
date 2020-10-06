import React, { useState, useEffect } from "react";
import '../style/Display.css';
import data from '../data';
import shuffle from '../shuffle';

const Display = (props) => {
  const [cards, setCards] = useState(() => shuffle(data));
  const {memory, score} = props;

  useEffect(() => {
    setCards(shuffle(data));    
  }, [score]);

  const handleClick = (e, id) =>{
    memory(id);
  }

  return (
    <div className="container-fluid">
      <header className="bg-dark text-center  text-white p-3 mt-2">
        <h3>Get points by clicking on an image but don't click on any more than once!</h3>
      </header>
      <main className="jumbotron jumbotron-fluid">
        <div className="row d-flex justify-content-between mx-2">
          {cards.map(item=>{
            return <div className="col-3"><div className="card mb-2" id={item.id} onClick={(e)=>handleClick(e, item.id)}>
                <img className="card-img-top" src={item.image} alt="player pic"/>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">{item.name}</li>
                    <li className="list-group-item">{item.nationality}</li>
                  </ul>
                </div>
              </div>
              </div>
          })}
        </div>
      </main>
    </div>
  );
}

export default Display;