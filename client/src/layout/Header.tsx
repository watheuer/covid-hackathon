import React from 'react'
import { Link } from 'react-router-dom';
import CSS from 'csstype';

export default function Header() {
  return (
    <header style={headerStyle}>
      <Link to="/" style={linkStyle} >Home</Link> | <Link style={linkStyle} to="/donate">Donate</Link> | <Link style={linkStyle} to="/request">Request</Link>
    </header>
  )
}

const headerStyle: CSS.Properties = {
  background: '#000',
  color: '#fff',
  textAlign: 'left',
  padding: '5px',
  fontSize: '36px'
}

const linkStyle: CSS.Properties = {
  color: '#fff',
  textDecoration: 'none'
}
