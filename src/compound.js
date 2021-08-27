import React from 'react';

export function Accordion({ children }) {
  return <div>{children}</div>;
}

Accordion.Header = ({ children }) => (
  <>{children || <span>default header</span>}</>
);

Accordion.Footer = ({ children }) => (
  <>{children || <span>default footer</span>}</>
);
