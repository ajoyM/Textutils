import React, {useState} from 'react';
import PropTypes from 'prop-types'
import DropdownMenu from './DropdownMenu';
import {Link} from 'react-router-dom'

export default function Navbar(props) {
  const [isDropDownVisible, setDropdownVisible] = useState(false);
  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };
  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-secondary" data-bs-theme={props.mode}>
    <div className="container-fluid">
      <a className="navbar-brand text-info-emphasis" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Service</a>
          </li>
          <li className="nav-item dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Company
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/about">About us</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="/">Career</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="/">Contact us</a></li>
              </ul>
            </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <div className="bg-primary rounded mx-2" onClick={() => {props.toggleMode('primary')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
        <div className="bg-danger rounded mx-2" onClick={() => {props.toggleMode('danger')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
        <div className="bg-success rounded mx-2" onClick={() => {props.toggleMode('success')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
        <div className="bg-warning rounded mx-2" onClick={() => {props.toggleMode('warning')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>


        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`} >
            <input className="form-check-input" type="checkbox" onClick={() => {props.toggleMode(null)}} role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">DarkMode</label>
        </div>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  )
}
Navbar.propTypes = {title: PropTypes.string}
