import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Search.css";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
//import Response from "./response";
import SearchIcon from "@material-ui/icons/Search";
import MicNoneIcon from "@material-ui/icons/MicNone";

function Search({ hidebuttons = false }) {
  const [, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();

    console.log("Entered", input);

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    history.push("/Search");
  };

  return (
    <form className="search">
      <div className="search_input">
        <SearchIcon className="search_inputbar" />
        <input
          placeholder="Search Google or type a URL"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <MicNoneIcon />
      </div>

      {!hidebuttons ? (
        <div className="search_btn">
          <button type="submit" className="btn" onClick={search}>
            Google Search
          </button>
          <button className="btn">I'm Feeling Lucky</button>
        </div>
      ) : (
        <div className="search_btn">
          <button type="submit" className="btnhidden" onClick={search}>
            Google Search
          </button>
          <button className="btnhidden">I'm Feeling Lucky</button>
        </div>
      )}
    </form>
  );
}

export default Search;
