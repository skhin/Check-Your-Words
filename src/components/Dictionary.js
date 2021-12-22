import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

const Dictionary = (props) => {
  const [keyWord, setKeyWord] = useState(props.defaultKeyWord);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const handleResponse = (response) => {
    // console.log(response.data[0]);
    // console.log(response.data[0].meanings[0].definitions[0].definition);
    setResults(response.data[0]);
  };

  const search = () => {
    // e.preventDefault();
    // alert(`Searching for ${keyWord} definition`);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    search();
  };

  const handleKeywordChange = (e) => {
    // console.log(e.target.value);
    setKeyWord(e.target.value);
  };

  const load = () => {
    setLoaded(true);
    search();
  };

  if (loaded) {
    return (
      <>
        <div className="dictionary">
          <h2>What word do you want to look up?</h2>
          <form onSubmit={handleSubmit}>
            <input
              className="form-control form-control-lg"
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyWord}
            />
          </form>
          <div className="hint">
            suggested words: horse, wrestling, sunset, pilates ...
          </div>
        </div>
        <Results results={results} />
      </>
    );
  } else {
    load();
    return "Loading";
  }
};

export default Dictionary;
