import React from 'react'

function DropdownMenu() {
    const dropdown = {
        background: '#fff',
        transition: 'all linear 0.3s'
      }
  return (
    <>
     <h2>hiii</h2>
     <div style={dropdown}>
      <ul>
        <li>Menu 1</li>
        <li>Menu 2</li>
        <li>Menu 3</li>
      </ul>
    </div>
    <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="/">About us</a></li>
    <li><hr className="dropdown-divider" /></li>
    <li><a className="dropdown-item" href="/">Career</a></li>
    <li><hr className="dropdown-divider" /></li>
    <li><a className="dropdown-item" href="/">Contact us</a></li>
  </ul></>
  )
}

export default DropdownMenu
