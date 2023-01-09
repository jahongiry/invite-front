import React from 'react';
import { useRef } from 'react';
import classes from './CardFilling.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { moveCard, formOne } from '../store/formSlice';

function FormOne() {
  const dispatch = useDispatch();
  const kuyov = useRef('');
  const kelin = useRef('');
  const mehmon = useRef('');

  const handleSubmit = (event) => {
    let payload = {
      kuyov: kuyov.current.value,
      kelin: kelin.current.value,
      telefon: mehmon.current.value,
    };
    dispatch(formOne(payload));
    dispatch(moveCard());
    event.preventDefault();
  };
  return (
    <div className={classes.details}>
      <h1>Juda yaxshi tanlov! Malumotlar kiriting.</h1>
      <form className={classes.form}>
        <input
          className={classes.kuyovInput}
          type='text'
          ref={kuyov}
          placeholder='Kuyovning ismi'
        ></input>
        <span className={classes.and}>&</span>
        <input
          className={classes.kelinInput}
          type='text'
          ref={kelin}
          placeholder='Kelinning ismi'
        ></input>
        <input
          className={classes.phoneInput}
          type='integer'
          ref={mehmon}
          placeholder='Mehmonning ismini kiriting (ihtiyoriy)'
        ></input>
        <button
          onClick={handleSubmit}
          className={classes.nextButton}
          type='submit'
        >
          Keyingisi
        </button>
      </form>
    </div>
  );
}

export default FormOne;
