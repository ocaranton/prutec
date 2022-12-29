import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import NavigationDesktop from '../../components/Navbar/Navbar';
import styles from './HomePage.module.css';

const navLinks = [
  {
    "name": "link one",
    "id": 13
  },
  {
    "name": "link two",
    "id": 14,
    "children": [
      {
        "name": "sub menu 1",
        "id": 21
      },
      {
        "name": "sub menu 2",
        "id": 22,
        "children": [
          { "name": "tree", "id": 441 },
          { "name": "bush", "id": 442 },
          { "name": "plant", "id": 443 }
        ]
      },
      {
        "name": "sub menu 3",
        "id": 23
      },
      {
        "name": "sub menu 4",
        "id": 24
      },
      {
        "name": "sub menu 5",
        "id": 25
      },
      {
        "name": "sub menu 6",
        "id": 26,
        "children": [
          { "name": "tree", "id": 41 },
          { "name": "bush", "id": 42 },
          { "name": "plant", "id": 43,  "children": [
            { "name": "tree", "id": 3341 },
            { "name": "bush", "id": 3342 },
            { "name": "plant", "id": 3343 }
          ] }
        ]
      },
      {
        "name": "sub menu 7",
        "id": 27
      }
    ]
  },
  {
    "name": "link three",
    "id": 15,
    "children": [
      {
        "id": 31,
        "name": "sub menu 3"
      },
      {
        "id": 32,
        "name": "options",
        "children": [
          {
            "id": 53,
            "name": "3 grand child 1"
          },
          {
            "id": 54,
            "name": "3 grand child 2"
          }
        ]
      },
      {
        "id": 33,
        "name": "sub menu 4"
      }
    ]
  },
  {
    "name": "link four",
    "id": 16
  },
  {
    "name": "link five",
    "id": 17,
    "children": [
      {
        "id": 31,
        "name": "sub menu 3"
      },
      {
        "id": 39,
        "name": "options 2",
        "children": [
          { "name": "1 grand child 5", "id": 69 },
          { "name": "2 grand child 5", "id": 67 },
          { "name": "3 grand child 5", "id": 63 }
        ]
      },
      {
        "id": 38,
        "name": "fifth sub menu"
      }
    ]
  }
];

const HomePage = (props) => (
  <div
    className={styles.HomePage}
    style={{ backgroundImage: `url("prutec/bg-content.jpg")` }}
    data-testid="HomePage">
    <Header />
    <NavigationDesktop navLinksData={navLinks} />
  </div>
);

HomePage.propTypes = {};
HomePage.defaultProps = {};

export default HomePage;
