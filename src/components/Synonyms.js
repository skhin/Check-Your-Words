import React from "react";

const Synonyms = (props) => {
  if (props.synonyms) {
    return (
      <>
        {" "}
        <strong>Synonyms: </strong>
        <ul className="synonyms">
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </>
    );
  } else {
    return null;
  }
};

export default Synonyms;
