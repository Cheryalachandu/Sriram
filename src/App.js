import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Search } from "./components/Search";
import { Card } from "./components/Card";
import { cardUtils } from "./utils/cardUtils";
import "./App.css";

function App() {
  const [searchText, setSearchText] = useState("");
  const filteredCards = cardUtils?.filter((card) => {
    const cardTitle = card.header;
    const newCardTitle = cardTitle.toLowerCase();
    const newSearch = searchText.trim();
    if (newCardTitle.includes(newSearch)) return card;
  });
  return (
    <div className="app">
      <Navbar />
      <Search searchText={searchText} setSearchText={setSearchText} />
      <div className="card__container">
        {filteredCards?.map((card) => {
          return (
            <div
              key={card.id}
              style={{width: "32rem" }}
            >
              <Card
                header={card.header}
                content={card.content}
                skills={card.skills}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
