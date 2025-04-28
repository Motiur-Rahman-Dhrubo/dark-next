import React from 'react';
import Hero from "./../components/Hero";

const layout = ({ children }) => {
  return <>
  <Hero />
  {children}
  </>;
};

export default layout;