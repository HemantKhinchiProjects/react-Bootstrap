import React, { useState } from 'react';
import Styles from './Forms.module.css';
const Button = (props) => {
  return (
    <React.Fragment>
      <button
        type="button"
        className="btn btn-primary"
        onClick={props.uppercaseHandler}
      >
        {props.btnName}
      </button>
    </React.Fragment>
  );
};
export default Button;
