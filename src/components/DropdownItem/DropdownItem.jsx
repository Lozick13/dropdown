import React from 'react';
import classes from './DropdownItem.module.css';

export const DropdownItem = ({ text, state }) => {
  return (
    <>
      <a
        href="#"
        className={`${classes['link']} ${state === 'active' ? classes['link_active'] : ''}`}
      >
        {text}
      </a>
    </>
  );
};
