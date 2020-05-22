import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from './Header.module.scss';

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <div
    className={headerStyles.divContainer}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <ul className={headerStyles.nav_list}>
        <li>

        <Link to="/about" className={headerStyles.nav_item} 
                        activeClassName={headerStyles.activeNavItem}>
                               About
        </Link>
        </li>
        <li>
        <Link className={headerStyles.nav_item} 
                        activeClassName={headerStyles.activeNavItem}>
                             Portfolio
                        </Link>
  
        </li>
        <li>
        <Link className={headerStyles.nav_item} 
                        activeClassName={headerStyles.activeNavItem}>
                           Contact
                        </Link>
         
        </li>
        <li>
        <Link className={headerStyles.nav_item} 
                        activeClassName={headerStyles.activeNavItem}>
                             Blog
                        </Link>
       
        </li>
        <li>
          <Link className={headerStyles.nav_item} activeClassName={headerStyles.activeNavItem}>
           Events
          </Link>
        </li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
