import React, { useState } from 'react';
import Styles from './Forms.module.css';
const Forms = (props) => {
  const [text, setText] = useState('Enter Text here');

  const clickHandler = (e) => {
    e.preventDefault();
    text.value()
    console.log('You clicked submit.');
  };
  return (
    <React.Fragment>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          onClick={clickHandler}
        ></textarea>
      </div>
    </React.Fragment>
  );
};
export default Forms;
