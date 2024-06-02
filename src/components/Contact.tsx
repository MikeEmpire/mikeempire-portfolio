import * as React from "react";
import { withPrefix } from "gatsby";

const Contact = (): JSX.Element => {
  const resumePDF = withPrefix("/resume-mikeolie-2.pdf")
  return (
    <section className="flex justify-center items-center">
      <ul className="text-4xl">
        <li className="mb-2 cursor-pointer max-600:mb-6">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/michael-olie-815a9681/"
          >
            LinkedIn
          </a>
        </li>
        <li className="mb-2 cursor-pointer max-600:mb-6">
          <a target="_blank" href="https://github.com/MikeEmpire">
            Github
          </a>
        </li>
        <li className="mb-2 cursor-pointer max-600:mb-6">
          <a href="mailto:aolie94@gmail.com">Email</a>
        </li>
        <li className="mb-2 cursor-pointer max-600:mb-6">
          <a
            target="_blank"
            href={resumePDF}
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
