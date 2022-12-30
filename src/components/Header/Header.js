import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './Header.module.scss';


const Header = ({ title, username }) => {
  const [arrowActive, setArrowActive] = useState(false);

  const changeArrow = () => {
    console.log({ arrowActive })
    setArrowActive(!arrowActive);
  }

  return (
    <div className={styles.container} data-testid="Header">
      <div className={styles.logo}>
        <img src='prutec/TuPruTec.svg' className="App-logo" alt={title} />
      </div>
      <div className={styles.username}>
        <span>{username}</span>
        <img src='prutec/ArrowDown.svg'
          onClick={() => changeArrow()}
          className={arrowActive ? styles.arrowActive : styles.arrow }
          alt="usernameIcon" />
      </div>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  username: PropTypes.string
};

Header.defaultProps = {
  title: 'PruTec',
  username: 'USER NAME'
};

export default Header;
