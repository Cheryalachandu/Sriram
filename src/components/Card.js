import React from "react";
import "./Card.css";
import { ReactComponent as CardIcon } from "../assets/card.svg";

export const Card = () => {
  return (
    <div className="card-container">
      <CardIcon />
      <h2>card Header</h2>
      <span>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lor em Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </span>
      <div className="card-btns">
      <button className="apply-btn">Apply</button>
      <button className="messages-btn">Messages</button>
      </div>
    </div>
  );
};
