import React from 'react';
import { Accordion } from './compound.js';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Accordion>
        <Accordion.Header>header</Accordion.Header>
        <br />
        <Accordion.Footer>footer</Accordion.Footer>
      </Accordion>
    </div>
  );
}
