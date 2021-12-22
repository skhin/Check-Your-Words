import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

const Dictionary = (props) => {
  const [keyWord, setKeyWord] = useState(props.defaultKeyWord);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  const handleDictionaryResponse = (response) => {
    // console.log(response.data[0]);
    // console.log(response.data[0].meanings[0].definitions[0].definition);
    setResults(response.data[0]);
  };

  const handlePexelResponse = (response) => {
    // console.log(response.data);
    setPhotos(response.data.photos);
  };

  const search = () => {
    // e.preventDefault();
    // alert(`Searching for ${keyWord} definition`);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const pexelsApiKey =
      "563492ad6f91700001000001abeaa943d0c742f0ad79f58986d6c54e";

    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyWord}&per_page=9`;

    let headers = { Authorization: `Bearer ${pexelsApiKey}` };

    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelResponse);
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
        <Photos photos={photos} />
      </>
    );
  } else {
    load();
    return "Loading";
  }
};

export default Dictionary;
