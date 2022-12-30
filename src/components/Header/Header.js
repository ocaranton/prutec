import React from 'react';
import PropTypes from 'prop-types';

import styles from './Header.module.scss';


const Header = ({ title, username }) => (
  <div className={styles.container} data-testid="Header">
    <div className={styles.logo}>
      <img src='prutec/TuPruTec.svg' className="App-logo" alt={title} />
    </div>
    <div className={styles.username}>
      <span>{username}</span>
      <img src='prutec/ArrowDown.svg' className="Arrow-icon" alt="usernameIcon" />
    </div>
  </div>
);

Header.propTypes = {
  title: PropTypes.string,
  username: PropTypes.string
};

Header.defaultProps = {
  title: 'PruTec',
  username: 'USER NAME'
};

export default Header;
