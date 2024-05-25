import * as React from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import type { HeadFC, PageProps } from "gatsby";

import bgVideo from "../../static/Blur.mp4";

import "../styles/index.css";

const pageStyles = {
  color: "#fff",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  zIndex: -2,
  justifyContent: "center",
  backgroundColor: "#000",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  overflow: "hidden",
};

const IndexPage: React.FC<PageProps> = () => {
  const [showContent, setShowContent] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 2000); // Show the rest of the content after 2 seconds
    return () => clearTimeout(timer);
  }, []);

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
              <p>
                As a passionate web developer with a keen eye for detail and a
                robust background in business and graphic design, I thrive on
                crafting innovative software solutions. Over the years, I have
                honed my expertise in JavaScript and a variety of modern
                technologies, enabling me to spearhead complex projects and
                mentor emerging developers. My experience spans leading tech
                teams to success at Rare Collectibles TV, co-founding and
                developing GroLens, and tackling diverse freelance projects.
                With a dedication to continuous learning and a commitment to
                excellence, I transform ideas into scalable, efficient, and
                user-friendly applications.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

