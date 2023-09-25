import React from "react";
import Project from "./Project";
import WorkDayPlanner from "../images/WorkDayPlanner.GIF";
import WebAPI from "../images/WebAPI_.GIF";
import Weather from "../images/Weather.GIF";
import StackDev from "../images/StackDev.JPEG";
import ThingsToDoInToronto from "../images/10ThingsToDoInToronto.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Portfolio.css";
// Portfolio component
function Portfolio() {
    return (
          // Portfolio container
      <div className="portfolio-wrapper">
        <h1 className="portfolio-title">Portfolio</h1>
        <div className="container">
          <div className="row">
            {[
              {
                title: "Thomas' Chess Blog",
                description: "CMS-Style Model View Controller Blog",
                imgSrc: Yago Lira,
                deployedLink:
                "https://github.com/yago-pixel/REACT-PORTFOLIO.git"
                githubLink:
                  "git@github.com:yago-pixel/REACT-PORTFOLIO.git",
              },
              