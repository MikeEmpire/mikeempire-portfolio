import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";

import ProjectDetails from "./ProjectDetails";

import { Project } from "../@types";

import grolensVideo from "../../static/Grolens X THC Design.mp4";
import sublimeWithRome from "../../static/sublimewithrome.png";
import rctvx from "../../static/rctvx.png";
import ptrainsbbq from "../../static/ptrainsbbq.png";

const projects: Project[] = [
  {
    id: 0,
    description:
      "GroLens is a nationwide ERP for cannabis cultivators that manages all of the customer's data inside of their facility and also manages their data with any 3rd party legal issues that may appear in that state. When it came to GroLens, I built the whole site using react, I mocked up the site using Sketch and some Webﬂow for prototyping. It is a MERN (React) stack project and deployed using AWS with MongoDB. There is also an iOS and Android app available to customers that I rebuilt in React native. In this position, I wore many hats around the company considering I am the co-founder and lead developer. At GroLens, here is a list of some of the tasks I performed to maintain the company’s stability:",
    title: "Grolens",
    technologies: [
      "TypeScript",
      "TailwindCSS",
      "Django",
      "Gin/Gonic",
      "NodeJS",
      "React Native",
      "AWS",
    ],
    media: grolensVideo,
  },
  {
    id: 1,
    description:
      "Rare Collectibles TV website that sells very valuable possessions to increase ",
    title: "RCTVX",
    technologies: [
      "VueJS",
      "TailwindCSS",
      "AWS",
      "GraphQL",
      "Django",
      "Shopify",
    ],
    media: rctvx,
  },
  {
    id: 2,
    description: "Official Website for P Trains Barbecue ",
    title: "Ptrains BBQ",
    technologies: ["NextJS", "Gatsby", "TailwindCSS", "AWS", "GraphQL"],
    media: ptrainsbbq,
  },
  {
    id: 3,
    description:
      "Official Website for Sublime With Rome that handles the tour dates and marketing of the legendary brand",
    title: "Sublime with Rome",
    technologies: ["Squarespace", "React"],
    media: sublimeWithRome,
  },
];

const Portfolio = (): JSX.Element => {
  const [selectedProject, setSelectedProject] = React.useState<Project>(
    projects[0]
  );

  const projectList = projects
    .filter((project) => selectedProject.id !== project.id)
    .map((project) => (
      <motion.li
        key={project.id}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setSelectedProject(project)}
        className="py-2.5 px-5 my-2.5 mx-0 cursor-pointer"
      >
        {project.title}
      </motion.li>
    ));

  return (
    <div className="flex-row items-center p-5">
      <ul className="p-0 w-full list-none">{projectList}</ul>
      <AnimatePresence>
        {selectedProject !== null && (
          <ProjectDetails
            id={selectedProject.id}
            title={selectedProject.title}
            description={selectedProject.description}
            technologies={selectedProject.technologies}
            media={selectedProject.media}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
