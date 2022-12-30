import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import NavigationDesktop from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

import styles from './HomePage.module.css';
import navLinks from './../../servicio.json';

const HomePage = (props) => (
  <div
    className={styles.HomePage}
    style={{ backgroundImage: `url("prutec/bg-content.jpg")` }}
    data-testid="HomePage">
    <Header />
    <NavigationDesktop navLinksData={navLinks.lista} />
    <Footer />
  </div>
);

HomePage.propTypes = {};
HomePage.defaultProps = {};

export default HomePage;
