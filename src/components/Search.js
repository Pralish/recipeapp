import React, { useState } from "react";
import { Link } from "react-router-dom";

function Search() {
  const [text, setText] = useState("");

  const onChange = e => {
    setText(e.target.value);
  };

  return (
    <div>
      <form>
        <input type="text" value={text} onChange={onChange}></input>
        <Link to={`/search/${text}`}>
          <button type="submit">Search</button>
        </Link>
      </form>
    </div>
  );
}

export default Search;
