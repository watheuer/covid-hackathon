import React from 'react'
import { Link } from 'react-router-dom';
import logo from './sample-logo.png'
import CSS from 'csstype';

export default function Header() {
  return (
    <header style={headerStyle}>
      <Link to="/" style={linkStyle} >Home</Link><Link style={linkStyle} to="/donate">Donate</Link><Link style={linkStyle} to="/request">Request</Link> 
      <img src={logo} style={imageStyle} alt="logo" />
    </header>
  )
}

const headerStyle: CSS.Properties = {
  background: 'linear-gradient(#3399ff, #6666ff)',
  color: '#fff',
  textAlign: 'left',
  padding: '0px 5px',
  fontSize: '24px',
}

const linkStyle: CSS.Properties = {
  color: '#fff',
  background: 'linear-gradient(#3333ff, #6633ff)',
  textDecoration: 'none',
  padding: '0px 50px',
  borderRadius: '15px 15px 0px 0px'
}

const imageStyle: CSS.Properties = {
  padding: '0px, 5px',
  width: '32px',
  height: '32px',
  position: 'absolute',
  right: '0'
}
