import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { HeadFC, PageProps } from "gatsby";

import bgVideo from "../../static/Blur.mp4";

import Home from "../components/Home";

import capitalize from "../helpers/capitalize";

import "../styles/index.css";
import Contact from "../components/Contact";
import Portfolio from "../components/Portfolio";

const pageStyles = {
  color: "#fff",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  zIndex: -2,
  justifyContent: "center",
  backgroundColor: "#000",
  fontFamily: "paralucent, Roboto, sans-serif, serif",
  overflow: "hidden",
};

const IndexPage: React.FC<PageProps> = () => {
  const [showContent, setShowContent] = React.useState(false);
  const [selectedTab, setTab] = React.useState<string>("home");
  const content = (): JSX.Element => {
    if (selectedTab === "contact") {
      return <Contact />;
    }
    if (selectedTab === "portfolio") {
      return <Portfolio />;
    }
    return <Home />;
  };

  React.useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 2000); // Show the rest of the content after 2 seconds
    return () => clearTimeout(timer);
  }, []);

  const tabOptions = ["home", "about", "projects", "contact"].map((tab) => {
    const handleTabClick = (): void => {
      setTab(tab);
    };
    return (
      <li key={tab} onClick={handleTabClick}>
        {capitalize(tab)}
      </li>
    );
  });

  return (
    <main style={pageStyles}>
      <AnimatePresence>
        {!showContent ? (
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 1.5 }}
          >
            Welcome To Mike Empire's Portfolio
          </motion.h1>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.5 }}
            style={{ position: "absolute", width: "100%", height: "100%" }}
          >
            <video
              autoPlay
              loop
              muted
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: 1,
              }}
            >
              <source src={bgVideo} type="video/mp4" />
            </video>
            <div
              style={{
                position: "absolute",
                top: "20px",
                left: "20px",
                zIndex: 2,
              }}
            >
              <h1>Mike Empire</h1>
              <h2>Web Developer</h2>
              <ul>{tabOptions}</ul>
            </div>
            <div
              style={{
                position: "absolute",
                top: "50%",
                right: "20px",
                transform: "translateY(-50%)",
                maxWidth: "400px",
                zIndex: 2,
              }}
            >
              {content()}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
