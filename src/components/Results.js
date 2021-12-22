import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

const Results = (props) => {
  //   console.log(props.results);

  if (props.results) {
    return (
      <>
        <div className="card">
          <div className="card-body">
            <div className="results">
              <h2 className="word">{props.results.word}</h2>
              {props.results.meanings.map(function (meaning, index) {
                return (
                  <div key={index}>
                    <Meaning meaning={meaning} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default Results;
