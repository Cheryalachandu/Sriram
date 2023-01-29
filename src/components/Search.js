import React, { useState } from "react";
import "./Search.css";
import { Chips } from "./Chips";

export const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [chips, setChips] = useState([]);

  const deleteHandler = (index) => {
    const newChips = chips.filter((_chip, idx) => idx !== index);
    setChips([...newChips]);
  };
  return (
    <div
      className="search-container"
    >
      <div className="searchbar-container">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="search-bar"
        />
        <button className="search-button" onClick={() => {
          if(searchText.trim().length !== 0)
          {setChips([...chips, searchText])
          setSearchText("")}
        }}>Find Job</button>
      </div>
      <div className="chips-container">
        <Chips data={chips} deleteHandler={deleteHandler} />
      </div>
    </div>
  );
};
