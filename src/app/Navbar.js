import React from 'react';
import logo from '../../src/logo.svg';

//React Component for Nav
//uses RTS Labs logo
export const Navbar = () => {
  return (
    <nav>
      <section>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>At Home Exercise</h1>
        <h2>Candidate: Will Broadway</h2>
      </section>
    </nav>
  )
}