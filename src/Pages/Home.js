import React from "react";
import Header from "../Header/Header";
import classes from "./Home.module.css";
import HomeHeader from "./HomeHeader";

const Data = [
  {
    Date: "Jul 16",
    Place: "DETROIT MI",
    Theatre: "DTE ENERGY MUSIC THEATRE",
  },
  {
    Date: "Jul 19",
    Place: "TORONTO,ON",
    Theatre: "BUDWEISER STAGE",
  },
  {
    Date: "Jul 22",
    Place: "BRISTOW, VA",
    Theatre: "JIGGY LUBE LIVE",
  },
  {
    Date: "Jul 29",
    Place: "PHOENIX, AZ",
    Theatre: "AK-CHIN PAVILION",
  },
  {
    Date: "AUG 2",
    Place: "LAS VEGAS, NV",
    Theatre: "T-MOBILE ARENA",
  },
  {
    Date: "AUG 7",
    Place: "CONCORD, CA",
    Theatre: "CONCORD PAVILION",
  },
];

function Home() {
  return (
    <>
      <Header />
      <HomeHeader />
      <section className={classes.content}>
        <h2>Tours</h2>
        <ul className={classes.list}>
          <li className={classes.items}>
            <span>Date</span>
            <span>Place</span>
            <span>Theatre</span>
            <span>Buy</span>
          </li>
          {Data.map((user) => (
            <li className={classes.items}>
              <span>{user.Date}</span>
              <span>{user.Place}</span>
              <span>{user.Theatre}</span>
              <button>BUY TICKET</button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Home;
