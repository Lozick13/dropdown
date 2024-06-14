import React from 'react';
import classes from './DropdownButton.module.css';
export const DropdownButton = ({ text, click }) => {
  return (
    <>
      <button className={classes['btn']} onClick={click}>
        {text}
        <span className={`material-icons ${classes['material-icons']}`}>public</span>
      </button>
    </>
  );
};
