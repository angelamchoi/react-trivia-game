import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({user, handleLogout}) => {
  if(user){
    return (
        <div className="Navbar">
          <div>
            <Link to='' className='NavBar-link' onClick={handleLogout}>LOG OUT</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <span className='NavBar-welcome'>Welcome, {user.name}!</span>
            <span className="NavBar-links">
        <br />
        <Link to="/quiz">play trivia </Link>&nbsp; | &nbsp;
        <Link to="/create">create</Link>&nbsp; | &nbsp;
        <Link to="/favs">favs</Link>&nbsp; | &nbsp;
        <Link to="/mytrivias">my trivias</Link>&nbsp; | &nbsp;
        
      </span>
          </div>
        </div>

    )
  }

  return (
    <div className='NavBar'>
      <div>
        <Link to="/login" className='NavBar-link'>LOG IN</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/signup" className='NavBar-link'>SIGN UP</Link>
      </div>
    </div>
  );
};

export default NavBar;