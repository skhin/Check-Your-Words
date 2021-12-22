import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
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
              {props.results.phonetics.map(function (phonetic, index) {
                return (
                  <div className="card">
                    <div className="card-body">
                      <div key={index}>
                        <Phonetic phonetic={phonetic} />
                      </div>
                    </div>
                  </div>
                );
              })}
              {props.results.meanings.map(function (meaning, index) {
                return (
                  <div className="card">
                    <div className="card-body">
                      <div key={index}>
                        <Meaning meaning={meaning} />
                      </div>
                    </div>
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
