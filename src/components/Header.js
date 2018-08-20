import React from "react";
import "./Companies.css";
export default function Header(props) {
  return (
    <div className="head_wrapper">
      <div className="Header">
        <div>
          {
            <img
              src="https://png2.kisspng.com/sh/1074f64a43db341a1cd3d5498a97290f/L0KzQYm3U8AzN6FofZH0aYP2gLBuTfJmbaMyidt3Z3Tkf376kPVkcZJxgeZELXPygrF1gb11e5pzfAZqbz3lgrbAhgJ6NZlqReZ8aX7qPcXoj71jbZZ3RadqOUm7Roe6gBJmbZY5RqgDMEG2RIeCUcUzOGE2SKoAMUi2RYS1kP5o/kisspng-beer-qingdao-speciality-corona-tsingtao-brewery-he-tsing-tao-beer-5a998663cbeee4.6801346915200108518353.png"
              className="mylogo"
              alt="logo"
            />
          }
        </div>
        {props.nav.map((nav, i) => {
          return (
            <li key={i} className="Nav-buttons">
              {<button className="btn-control">{nav}</button>}
            </li>
          );
        })}
      </div>
    </div>
  );
}
