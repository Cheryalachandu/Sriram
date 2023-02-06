import React from "react";
import "./Card.css";
import { ReactComponent as CardIcon } from "../assets/card.svg";

export const Card = ({ header, content, skills }) => {
  return (
    <div className="card-container">
      <CardIcon />
      <h2>{header}</h2>
      <span>{content}</span>
      <div>{skills}</div>
      <div className="card-btns">
        <button className="apply-btn">Apply</button>
        <button className="messages-btn">Messages</button>
      </div>
    </div>
  );
};
