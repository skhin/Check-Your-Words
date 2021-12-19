import React from "react";

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
                {definition.definition}
                <br />
                <em>{definition.example}</em>
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Meaning;
