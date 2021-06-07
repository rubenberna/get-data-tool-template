import React from 'react'
import { Link } from 'react-router-dom';

export const SideNav = ({ Icon, link }) => {

  return (
    <div className="sidenav">
      <Link to="/">
        <h3 className="sidenav-title">Volvo</h3>
      </Link>
      <h4 className="sidenav-sub-title">( workbench )</h4>
      <div className="sidenav-icon">
        <Link to={link}>
          <Icon/>
        </Link>
      </div>
    </div>
  )
}
