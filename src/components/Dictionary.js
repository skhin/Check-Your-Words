import React, { useState } from "react";
import "./Dictionary.css";

const Dictionary = () => {
  const [keyWord, setKeyWord] = useState("");

  const search = (e) => {
    e.preventDefault();
    alert(`Searching for ${keyWord} definition`);
  };

  const handleKeywordChange = (e) => {
    // console.log(e.target.value);
    setKeyWord(e.target.value);
  };
  return (
    <>
      <div className="dictionary">
        <form onSubmit={search}>
          <input type="search" onChange={handleKeywordChange} />
        </form>
      </div>
    </>
  );
};

export default Dictionary;
