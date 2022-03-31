import React, { useState } from 'react';
import Styles from './Forms.module.css';
import Button from '../Buttons/Button';
const Forms = (props) => {
  const [text, setText] = useState('Enter Text here');

  const uppercaseHandler = () => {
    const newText = text.toUpperCase();
    setText(newText);
  }; //code for button

  const lawercaseHandler = () => {
    const newText = text.toLowerCase();
    setText(newText);
  };
  const textChangeHandler = (e) => {
    e.preventDefault();
    setText(e.target.value);
  }; //code for textarea
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
          <div className="btn-group">
            <Button
              btnName="Upper case"
              btnName2="Lower case"
              uppercaseHandler={uppercaseHandler}
              lawercaseHandler={lawercaseHandler}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <h2>Your Text Summry</h2>
          <p>
            {text.split(' ').length} Words and {text.length} characters
          </p>
          <p>{0.008 * text.split(' ').length} minutes reading time</p>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Forms;
