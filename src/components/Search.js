import React, { useState } from "react";
import { Link } from "react-router-dom";

function Search({ showClear, clearItems }) {
  const [text, setText] = useState("");

  const onChange = e => {
    setText(e.target.value);
  };

  return (
    <div>
      <form className={`${!showClear ? "landing-page" : "not-landing-page"}`}>
        <input type="text" value={text} onChange={onChange}></input>
        <Link to={`/search/${text}`}>
          <button type="submit">Search</button>
        </Link>

        {showClear && (
          <Link to="/" className="btn btn-danger" onClick={clearItems}>
            Clear
          </Link>
        )}
      </form>
    </div>
  );
}

export default Search;
