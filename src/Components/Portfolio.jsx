/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "House Price Prediction in Nigeria",
    description:
      "Built a Machine Learning Regression Model to predict the prices of houses in Nigeria.",
    url: "https://github.com/Apprentice-doa/House-Prices-Prediction-in-Nigeria-Model",
  },
  {
    title: "Fraud Detection in Energy and Gas Consumption",
    description:
      "Built a Machine Learning classification model to predict whether a power client is fraudulent or not.",
    url: "https://github.com/Apprentice-doa/Fraud-Detection-In-Energy-and-Gas-Consumption-Model",
  },
  {
    title: "ChatBot using Natural Language Processing",
    description:
      "Built a conversational chatbot using NLP and corpus and deployed it to a web app using streamlit.",
    url: "https://github.com/Apprentice-doa/Chatbot-using-NLP",
  },
  {
    title: "Collaborative Learning Filtering Recommendation System",
    description:
      "Built a recommender system to match students based on performance metrics and deployed to render as an API.",
    url: "https://github.com/Apprentice-doa/synapse",
  },
  {
    title: "NPFL Seasonal EDA Dashboard ⚽ ",
    description:
      "Built a PowerBI Dashboard for the NPFL's (Nigeria Professional Football League) Seasonal Stats.",
    url: "https://github.com/Apprentice-doa/NPFL-Seasonal-Data-Analytics",
  },
  {
    title: "E-Commerce Data Analytics Dashboard 🛒",
    description:
      "Performed Data Analytics and built an analytical Dashboard for an E-Commerce company.",
    url: "https://github.com/Apprentice-doa/PowerBI-E-Commerce-Data-Analytics",
  },
  {
    title: "My Resume",
    description:
      "Includes my professional and technical experience, academic record, skillsets, and accomplishments .",
    url: "https://drive.google.com/drive/folders/1wx5hgYpfSHk75l1fULGdgZZ28-NCY1Jq?usp=sharing",
  },
  {
    title: "NPFL Dataset Generation and kernel-based EDA",
    description:
      "Gathered NPFL Seasonal data across seasons using Data Mining/Scraping Techniques and performed EDA on them.",
    url: "https://www.kaggle.com/",
  },

];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
