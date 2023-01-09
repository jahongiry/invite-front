import React from 'react';
import classes from './Header.module.css';
import Body from './Body';
import { useRef } from 'react';

function Header() {
  const userName = useRef('');
  const telefon = useRef('');
  const handleSubmit = (event) => {
    localStorage.setItem('userName', userName.current.value);
    localStorage.setItem('telefon', telefon.current.value);
  };

  const user = localStorage.getItem('userName');
  return (
    <div>
      <div className={classes.header}>
        <div className={classes.container1}>
          <h1 className={classes.headingText}>
            Taklifnomalaringizni biz bilan yarating!
          </h1>
          {user && (
            <div>
              <h2 className={classes.headingText2}>
                Quyidagilardan tanlang va soniyalar ichida <br />
                taklifnomalaringizni yarating!
              </h2>
            </div>
          )}
          {!user && (
            <form className={classes.form}>
              <input
                className={classes.phoneInput}
                type='integer'
                ref={telefon}
                placeholder='tel: +998...'
              ></input>
              <input
                className={classes.nameInput}
                type='name'
                ref={userName}
                placeholder='Ismingizni kiriting...'
              ></input>
              <button
                className={classes.submitInput}
                onClick={handleSubmit}
                type='submit'
              >
                Kirish
              </button>
            </form>
          )}
        </div>
        <div className={classes.container2}></div>
      </div>
      <Body />
    </div>
  );
}

export default Header;
