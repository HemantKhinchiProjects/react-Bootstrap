import React from 'react';
import Styles from './Forms.module.css';
const Forms = () => {
  const clickHandler = (e) => {
    e.preventDefault();
    console.log('You clicked submit.');
  };
  return (
    <React.Fragment>
      <div className="mb-3">
        <label forhtml="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
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
