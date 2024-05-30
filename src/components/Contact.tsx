import * as React from "react";

const Contact = (): JSX.Element => {
  return (
    <section className="flex justify-center items-center">
      <ul className="text-4xl">
        <li className="mb-2 cursor-pointer max-425:mb-6">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/michael-olie-815a9681/"
          >
            LinkedIn
          </a>
        </li>
        <li className="mb-2 cursor-pointer max-425:mb-6">
          <a target="_blank" href="https://github.com/MikeEmpire">
            Github
          </a>
        </li>
        <li className="mb-2 cursor-pointer max-425:mb-6">Email</li>
      </ul>
    </section>
  );
};

export default Contact;
