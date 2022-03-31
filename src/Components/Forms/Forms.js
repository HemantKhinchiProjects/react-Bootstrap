import React, { useState } from 'react';
import Styles from './Forms.module.css';
import Button from '../Buttons/Button';
const Forms = (props) => {
  const [text, setText] = useState('Enter Text here');
  const uppercaseHandler = (e) => {
    const newText = text.toUpperCase();
    setText(newText);
  };
  const textChangeHandler = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };
  return (
    <React.Fragment>
      <h1>{props.heading} </h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          onChange={textChangeHandler}
          value={text}
        ></textarea>
      </div>
      <div className="row">
        <div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={uppercaseHandler}
          >
            toUpperCase
          </button>
          {/* <Button btnName="Uppercase" onClick={uppercaseHandler} /> */}
        </div>
      </div>
    </React.Fragment>
  );
};
export default Forms;
