import React from 'react';
import classes from './DropdownList.module.css';
import { DropdownItem } from '../DropdownItem/index.js';

export const DropdownList = ({ state, item, settings, clickItem }) => {
  return (
    <>
      <ul
        className={`${classes['dropdown']} ${classes[state === 'open' ? 'dropdown-open' : '']} `}
      >
        {settings.map((setting, index) => (
          <li key={index} onClick={() => clickItem(index)}>
            <DropdownItem text={setting} state={index === item ? 'active' : ''} />
          </li>
        ))}
      </ul>
    </>
  );
};
