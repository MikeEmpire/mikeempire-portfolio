import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { withPrefix } from "gatsby";

import ProjectDetails from "./ProjectDetails";

import { Project } from "../@types";

const Portfolio = (): JSX.Element => {
  const grolensVideo = withPrefix("/Grolens-x-THC-Design.mp4");
  const sublimeWithRome = withPrefix("/sublimewithrome.png");
  const rctvx = withPrefix("/rctvx.png");
  const ptrainsbbq = withPrefix("/ptrainsbbq.png");
  const projects: Project[] = [
    {
      id: 0,
      projectLink: "https://grolens.com",
      description:
        "GroLens is a nationwide ERP for cannabis cultivators that manages all of the customer's data inside of their facility and also manages their data with any 3rd party legal issues that may appear in that state. When it came to GroLens, I built the whole site using react, I mocked up the site using Sketch and some Webﬂow for prototyping. It is a MERN (React) stack project and deployed using AWS with MongoDB. There is also an iOS and Android app available to customers that I rebuilt in React native. In this position, I wore many hats around the company considering I am the co-founder and lead developer.",
      title: "Grolens",
      technologies: [
        "TypeScript",
        "TailwindCSS",
        "Django",
        "SASS",
        "Gin/Gonic",
        "NodeJS",
        "React Native",
        "AWS",
      ],
      media: grolensVideo,
    },
    {
      id: 1,
      projectLink: "https://rctvx.com",
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
      projectLink: "https://ptrainsbbq.com",
      description: "Official Website for P Trains Barbecue ",
      title: "Ptrains BBQ",
      technologies: [
        "NextJS",
        "Gatsby",
        "TailwindCSS",
        "SASS",
        "AWS",
        "GraphQL",
        "MongoDB",
        "PostgreSQL",
      ],
      media: ptrainsbbq,
    },
    {
      projectLink: "https://sublimewithrome.com",
      id: 3,
      description:
        "Official Website for Sublime With Rome that handles the tour dates and marketing of the legendary brand",
      title: "Sublime with Rome",
      technologies: ["Squarespace", "React"],
      media: sublimeWithRome,
    },
  ];
  const [selectedProject, setSelectedProject] = React.useState<Project>(
    projects[0]
  );

  const projectList = projects.map((project) => {
    const isSelected = project.id === selectedProject.id;
    const className = isSelected ? "text-emerald-300" : "text-stone-300";
    return (
      <motion.li
        key={project.id}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={(): void => {
          if (isSelected) {
            return;
          }
          return setSelectedProject(project);
        }}
        className={`py-2.5 px-5 my-2.5 mx-0 cursor-pointer ${className}`}
      >
        {project.title}
      </motion.li>
    );
  });

  return (
    <div className="flex flex-row-reverse items-center p-5 max-600:h-96 max-600:flex-col">
      <ul className="p-0 list-none w-16 mr-4 max-600:flex-row max-600:flex max-600:m-0 max-600:w-full">
        {projectList}
      </ul>
      <AnimatePresence>
        {selectedProject !== null && (
          <ProjectDetails
            projectLink={selectedProject.projectLink}
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
