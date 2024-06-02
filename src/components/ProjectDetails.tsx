import * as React from "react";
import { motion } from "framer-motion";

import { Project } from "../@types";

interface ProjectProps extends Project {}

function ProjectDetails(project: ProjectProps): JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="90vh mt-2 p-2.5 max-600:h-48  overflow-scroll max-600:w-full"
    >
      <h3 className="text-3xl max-600:mb-3 mb-6">{project.title}</h3>
      <p className="mb-2 max-600:mb-1">{project.description}</p>
      <h4 className="text-xl max-600:mb-2 mb-4">Technologies Used:</h4>
      <ul className="flex flex-row gap-4 max-600:flex-col">
        {project.technologies.map((tech) => (
          <li className="text-md italic text-stone-50 " key={tech}>
            {tech}
          </li>
        ))}
      </ul>
      {project.media.endsWith(".mp4") ? (
        <video
          src={project.media}
          controls
          style={{ width: "100%", marginTop: "10px" }}
        />
      ) : (
        <img
          src={project.media}
          alt={project.title}
          style={{ width: "100%", marginTop: "10px" }}
        />
      )}
    </motion.div>
  );
}

export default ProjectDetails;
