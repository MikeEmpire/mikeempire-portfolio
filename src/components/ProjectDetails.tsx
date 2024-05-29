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
      className="mt-2 p-2.5"
      style={{
        borderRadius: "8px",
      }}
    >
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <h4>Technologies Used:</h4>
      <ul>
        {project.technologies.map((tech) => (
          <li key={tech}>{tech}</li>
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