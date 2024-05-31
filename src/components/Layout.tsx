import React from "react";
import { Helmet } from "react-helmet";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mike Olie's Portfolio</title>
        <meta name="description" content="Mike Olie's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://michael-olie.com" />
      </Helmet>
      {children}
    </>
  );
};

export default Layout;
