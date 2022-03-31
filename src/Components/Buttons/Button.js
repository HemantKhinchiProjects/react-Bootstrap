import React from 'react';
import Styles from './Forms.module.css';
const Button = (props) => {
  return (
    <React.Fragment>
      <button type="button" className="btn btn-primary">
        {props.btnName}
      </button>
    </React.Fragment>
  );
};
export default Button;
