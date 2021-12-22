import React from "react";
import Synonyms from "./Synonyms";

const Meaning = (props) => {
  console.log(props.meaning);
  const word = props.meaning;

  return (
    <>
      <div className="meaning">
        <h3>{word.partOfSpeech}</h3>
        {word.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p>
                <strong>Definition:</strong> {definition.definition}
                <br />
                <br />
                <strong>Example:</strong>{" "}
                <span className="example">
                  "<em>{definition.example}</em>""
                </span>
                <br />
                <br />
                <Synonyms synonyms={definition.synonyms} />
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Meaning;
