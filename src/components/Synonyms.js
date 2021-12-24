import React from "react";

const Synonyms = (props) => {
  if (props.synonyms) {
    return (
      <>
        {" "}
        <div>
          <strong>Synonyms: </strong>
        </div>
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
