import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CONSTANTS } from '../../global/i18n/constants';

const NavigationDesktop = (props) => {
  const { navLinksData } = props;
  const [showSubMenu, setShowSubMenu] = useState([]);
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mItem = Object.keys(navLinksData[0]);
    if (!menuData.length) {
      mItem.forEach(specItem => {
        let tmpMenuData = menuData;
        if (navLinksData[0][specItem].length > 0) {
          tmpMenuData.push({ id: (Math.floor(Math.random() * 100000) + 1), name: specItem, children: getSubmenuItems(navLinksData[0][specItem], specItem) })
        } else {
          tmpMenuData.push({ id: (Math.floor(Math.random() * 100000) + 1), name: specItem });
        }
        setMenuData(tmpMenuData)
      });
    }
    setLoading(false)
  }, [menuData]);

  const getSubmenuItems = (sItems, specItemName) => {
    let sItemArray = [];
    let sIar = Object.keys(sItems[0]);
    sIar.forEach(specItemFor => {
      sItemArray.push({ id: (Math.floor(Math.random() * 100000) + 1), name: specItemFor });
    });
    return sItemArray;
  }

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  const subMenuOnMouseEnterHandler = (subMenuId) => {
    setShowSubMenu((prev) => {
      let arr = [...prev];
      arr[subMenuId] = true;
      return arr;
    });
  };
  const subMenuOnMouseLeaveHandler = (subMenuId) => {
    setShowSubMenu((prev) => {
      let arr = [...prev];
      arr[subMenuId] = false;
      return arr;
    });
  };

  return (!loading &&
    <nav className="container-nav">
      <ul className='main-nav'>
        {menuData.map((el, i) => {
          if (!el.children) {
            return (
              <li key={el.id}>
                <a href='#' className='header-nav-link'>
                  <span>{CONSTANTS[el.name] ? CONSTANTS[el.name] : CONSTANTS.not_name}</span>
                </a>
              </li>
            );
          }

          return (
            <li
              onMouseEnter={(event) => subMenuOnMouseEnterHandler(el.id)}
              onMouseLeave={(event) => subMenuOnMouseLeaveHandler(el.id)}
              key={el.id}
              className='header-nav-options options-hover'
            >
              <div className='header-nav-div'>
                <span>{CONSTANTS[el.name] ? CONSTANTS[el.name] : CONSTANTS.not_name}</span>
              </div>
              <motion.ul
                variants={variants}
                animate={showSubMenu[el.id] ? "open" : "closed"}
                className='header-nav-ul'
              >
                {showSubMenu[el.id] &&
                  el.children.map((ele) => {
                    if (!ele.children) {
                      return (
                        <li key={ele.id} className='sub-menu-li'>
                          <a
                            href='#'
                            className='sub-menu-link'
                            style={{ textDecoration: "none" }}
                          >
                            <span>{CONSTANTS[ele.name] ? CONSTANTS[ele.name] : CONSTANTS.not_name}</span>
                          </a>
                        </li>
                      );
                    }

                    return (
                      <li
                        onMouseEnter={() => subMenuOnMouseEnterHandler(ele.id)}
                        onMouseLeave={() => subMenuOnMouseLeaveHandler(ele.id)}
                        key={ele.id}
                        className='sub-menu-options sub-menu-hover'
                      >
                        <div className='sub-menu-div'>
                          <span>{CONSTANTS[ele.name] ? CONSTANTS[ele.name] : CONSTANTS.not_name}</span>
                          <span className='arrow'>{"-->"}</span>
                        </div>
                        <motion.ul
                          variants={variants}
                          animate={showSubMenu[ele.id] ? "open" : "closed"}
                          className='sub-menu-ul'
                        >
                          {showSubMenu[ele.id] &&
                            ele.children.map((elem) => {
                              return (
                                <li key={elem.id} className='grand-child-link'>
                                  <a href='#'>
                                    <span>{CONSTANTS[elem.name] ? CONSTANTS[elem.name] : CONSTANTS.not_name}</span>
                                  </a>
                                </li>
                              );
                            })}
                        </motion.ul>
                      </li>
                    );
                  })}
              </motion.ul>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavigationDesktop;
