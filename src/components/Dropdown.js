import React, { useState } from "react";
import { dropdownUtils } from "../utils/dropdownUtils";
import { ReactComponent as Avatar } from "../assets/avatar.svg";
import styles from "./styles.module.css";

export const Dropdown = () => {
  const [popUp, setPopUp] = useState(false);
  return (
    <div className={styles["dropdown"]}>
      <div
        className={styles["navbar-avatar"]}
        onClick={() => setPopUp((prev) => !prev)}
      >
        <Avatar />
      </div>
      {popUp ? (
        <div className={styles["navbar-dropdown"]}>
          {dropdownUtils?.map((item, index) => {
            return (
              <div className={styles["navbar-item"]}>
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
