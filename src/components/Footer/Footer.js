import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.scss';

const Footer = () => (
  <div className={styles.Footer} data-testid="Footer">
    <div className={styles.FooterContainer}>
      <img src='prutec/Isotipo.svg' className="Isotipo-logo" alt="Isotipo Left" />
      <span>&copy; 2022 Novopayment Inc. All rights reserved.</span>
      <img src='prutec/Private-CEO.svg' className="Private-CEO-logo" alt="Isotipo Right" />
    </div>
  </div>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
