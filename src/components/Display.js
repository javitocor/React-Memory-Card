import React from "react";
import '../style/Display.css';
import data from '../data';

const Display = (props) => {

  return (
    <div className="container-fluid">
      <header className="bg-dark text-center  text-white p-3 mt-2">
        <h3>Get points by clicking on an image but don't click on any more than once!</h3>
      </header>
      <main className="jumbotron jumbotron-fluid">
        <div className="row d-flex justify-content-between mx-2">
          {data.map(item=>{
            return <div className="col-3"><div class="card mb-2">
                <img class="card-img-top" src={item.image} alt="player pic"/>
                <div class="card-body">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">{item.name}</li>
                    <li class="list-group-item">{item.nationality}</li>
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