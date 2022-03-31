import React, { useState } from 'react';
import Styles from './Forms.module.css';
import Button from '../Buttons/Button';
const Forms = (props) => {
  const [text, setText] = useState('Enter Text here');

  const uppercaseHandler = () => {
    const newText = text.toUpperCase();
    setText(newText);
    alert('asdf');
  }; //code for button

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
          
          <Button btnName="Uppercase" uppercaseHandler={uppercaseHandler} />
        </div>
      </div>
    </React.Fragment>
  );
};
export default Forms;
