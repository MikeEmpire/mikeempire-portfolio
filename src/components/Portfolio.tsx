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
    description: "Grolens",
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
    technologies: [],
    media: rctvx,
  },
  {
    id: 2,
    description: "Official Website for P Trains Barbecue ",
    title: "Ptrains BBQ",
    technologies: ["NextJS", "TailwindCSS", "AWS", "GraphQL"],
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
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(
    projects[0]
  );

  return (
    <div className="flex-col items-center p-5">
      <ul className="p-0 w-full list-none">
        {projects.map((project) => (
          <motion.li
            key={project.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedProject(project)}
            style={{
              padding: "10px 20px",
              margin: "10px 0",
              background: "#e0e0e0",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            {project.title}
          </motion.li>
        ))}
      </ul>
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
