import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navigation.module.css';
import logo from '../img/logo3.png';

function Navigation() {
  const removeLocal = () => {
    localStorage.removeItem('userName');
    localStorage.removeItem('telefon');
    window.location.reload(true);
  };
  return (
    <div className={classes.NavContainer}>
      <Link className={classes.logo} to='/'>
        <img className={classes.logoImage} src={logo}></img>
      </Link>
      <Link className={classes.login} to='/' onClick={removeLocal}>
        <div className={classes.loginIcon}>
          <ion-icon name='person-circle-outline'></ion-icon>
        </div>{' '}
        Kirish
      </Link>
    </div>
  );
}

export default Navigation;
