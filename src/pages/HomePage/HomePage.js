import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import styles from './HomePage.module.scss';

const HomePage = (props) => (
  <div className={styles.HomePage} data-testid="HomePage">
    <Header/>
  </div>
);

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
