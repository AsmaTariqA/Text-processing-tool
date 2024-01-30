import React from 'react'
import PropTypes from 'prop-types'
// import {Link} from 'react-router-dom'

// Props are just basically information that you can pass to a react compoonent

export default function Navbar(props) {
  
  
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
      <a className="navbar-brand" href="#home">{props.title}</a>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
            
          </ul>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
          </div>
        </div>
      </div>
    </nav>

  );
}
Navbar.propTypes = { title: PropTypes.string }
Navbar.propTypes = { mode: PropTypes.string }
Navbar.propTypes = { toggleMode: PropTypes.string }
Navbar.propTypes = { toggleBrownTheme: PropTypes.string }
Navbar.propTypes = { brown: PropTypes.string }
