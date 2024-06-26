import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { HeadFC, PageProps } from "gatsby";
import { withPrefix } from "gatsby";

import Home from "../components/Home";
import Contact from "../components/Contact";
import Layout from "../components/Layout";
import Portfolio from "../components/Portfolio";

import capitalize from "../helpers/capitalize";

import "../styles/index.css";

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
  const bgGif = withPrefix("/portfoliobg.gif");
  const content = (): JSX.Element => {
    if (selectedTab === "contact") {
      return <Contact />;
    }
    if (selectedTab === "projects") {
      return <Portfolio />;
    }
    return <Home />;
  };

  React.useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 1800); // Show the rest of the content after 2 seconds
    return () => clearTimeout(timer);
  }, []);

  const tabOptions = ["home", "projects", "contact"].map((tab) => {
    const handleTabClick = (): void => {
      setTab(tab);
    };
    const isSelected = tab === selectedTab;
    const className = isSelected ? "active-link" : "";
    return (
      <li
        className={`${className} cursor-pointer text-3xl mb-2 hover:text-emerald-300 w-2 transition-colors`}
        key={tab}
        onClick={handleTabClick}
      >
        {capitalize(tab)}
      </li>
    );
  });

  return (
    <Layout>
      <main style={pageStyles}>
        <AnimatePresence>
          {!showContent && (
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.h1
                className="text-4xl text-center"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 1.5 }}
              >
                Welcome To Mike Olie's Portfolio
              </motion.h1>
            </div>
          )}
        </AnimatePresence>
        {showContent && (
          <motion.div
            className="relative w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.5 }}
          >
            <picture>
              <img
                src={bgGif}
                alt="Background"
                className="w-full h-full object-cover absolute"
                style={{ zIndex: 1 }}
              />
            </picture>
            <div className="flex flex-row max-600:flex-col md:h-screen max-600:h-screen">
              <div
                className="relative p-3 w-28"
                style={{
                  zIndex: 2,
                }}
              >
                <section className="mb-8 max-600:flex max-600:gap-5 max-600:items-center">
                  <h1 className="text-3xl">Mike Olie</h1>
                  <h2 className="text-xl">Software Engineer</h2>
                </section>
                <ul>{tabOptions}</ul>
              </div>
              <div
                className="max-h-full relative w-full pr-8 max-600:p-0"
                style={{
                  zIndex: 2,
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedTab}
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    exit={{ opacity: 0, y: 100 }}
                    className="flex items-center h-full justify-end max-600:justify-center max-600:gap-6 max-600:w-screen"
                  >
                    {content()}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Mike Olie's Portfolio</title>;
