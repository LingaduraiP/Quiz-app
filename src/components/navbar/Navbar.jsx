import React from "react";
import logo from "../../assets/logo.png";
import classes from './NavBar.module.css'

const Navbar = () => {
  return (
    <nav className={`container-fluid ${classes.nav__fluid}`}>
      <div className={`container ${classes.nav__container}`}>
        <img src={logo} alt="" />
        <div className={classes.user__details}>
          <p>Lingadurai</p>
          <p>Profile</p>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
