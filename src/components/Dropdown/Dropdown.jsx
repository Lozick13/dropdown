import React, { useState } from 'react';
import { DropdownList } from '../DropdownList/index.js';
import { DropdownButton } from '../DropdownButton/index.js';

export const Dropdown = () => {
  const [dropdownState, setDropdownState] = useState('close');
  const [activeDropdownItem, setActiveDropdownItem] = useState(0);
  const settings = [
    'Profile Information',
    'Change Password',
    'Become PRO',
    'Help',
    'Log Out',
  ];
  const changeState = () => {
    setDropdownState(dropdownState === 'close' ? 'open' : 'close');
  };
  const changeActiveItem = index => {
    setActiveDropdownItem(index);
  };

  return (
    <>
      <DropdownButton text={'account settings'} click={changeState} />
      <DropdownList
        state={dropdownState}
        item={activeDropdownItem}
        settings={settings}
        clickItem={changeActiveItem}
      />
    </>
  );
};
