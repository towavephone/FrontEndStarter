// @flow

import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  HOME_PAGE_ROUTE,
  HELLO_PAGE_ROUTE,
  HELLO_ASYNC_PAGE_ROUTE,
  NOT_FOUND_DEMO_PAGE_ROUTE,
} from '../routes'

const Nav = () =>
  <nav className="nav-extended">
    <div className="nav-wrapper">
      <ul className="hide-on-med-and-down blue accent-3 row">
        {[
          { route: HOME_PAGE_ROUTE, label: 'Home' },
          { route: HELLO_PAGE_ROUTE, label: 'Say Hello' },
          { route: HELLO_ASYNC_PAGE_ROUTE, label: 'Say Hello Asynchronously' },
          { route: NOT_FOUND_DEMO_PAGE_ROUTE, label: '404 Demo' },
        ].map(link => (
          <li key={link.route} className="tab col s3">
            <NavLink to={link.route} exact className="flow-text center-align">{link.label}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  </nav>
export default Nav
