import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

const Dictionary = () => {
  const [keyWord, setKeyWord] = useState("");

  const handleResponse = (response) => {
    console.log(response.data[0]);
  };

  const search = (e) => {
    e.preventDefault();
    // alert(`Searching for ${keyWord} definition`);

    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);
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
