import React from "react";
import { navbarUtils } from "../utils/navbarUtils";
import { Dropdown } from "./Dropdown";
import { ReactComponent as Microsoft } from "../assets/microsoft.svg";
import styles from "./styles.module.css"

export const Navbar = () => {
  return (
    <div className = {styles["navbar"]}>
      <div className= {styles["navbar-logo"]}>
        <Microsoft />
        <div>
          <h2>Microsoft</h2>
        </div>
      </div>
      <div className= {styles["navbar-items"]}>
        {navbarUtils?.map((item, index) => {
          return (
            <div key = {index}>
              <h4>{item.name}</h4>
            </div>
          );
        })}
      </div>
      <div className= {styles["navbar-avatar"]}>
        <Dropdown/>
      </div>
    </div>
  );
}