import React from "react";
import "./Phonetic.css";

const Phonetic = (props) => {
  // console.log(props.phonetic);
  return (
    <>
      <div className="phonetic">
        <a href={props.phonetic.audio} target="_blank" className="listen">
          Listen here
        </a>{" "}
        <span className="text">{props.phonetic.text}</span>
      </div>
    </>
  );
};

export default Phonetic;
