import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

const Meaning = (props) => {
  // console.log(props.meaning);
  const word = props.meaning;

  return (
    <>
      <div className="meaning">
        <h3>{word.partOfSpeech}</h3>
        {word.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <div key={index}>
                <div className="definition">{definition.definition}</div>
                <br />

                <div className="example">{definition.example}</div>
                <br />
                <Synonyms synonym={definition.synonyms} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Meaning;
