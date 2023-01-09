import React from 'react';
import { useRef } from 'react';
import classes from './FormOneB.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { moveCard, formOne } from '../../store/formSliceB';

function FormOneB() {
  const dispatch = useDispatch();
  const mehmon = useRef('');
  const mezbon = useRef('');
  const telefon = useRef('');

  const handleSubmit = (event) => {
    let payload = {
      mehmon: mehmon.current.value,
      mezbon: mezbon.current.value,
      telefon: telefon.current.value,
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
          className={classes.mehmonInput}
          type='text'
          ref={mehmon}
          placeholder='Mehmonning ismi'
        ></input>
        <input
          className={classes.mezbonInput}
          type='text'
          ref={mezbon}
          placeholder='Sizning ismingiz (mezbon)'
        ></input>
        <input
          className={classes.phoneInput}
          type='integer'
          ref={telefon}
          placeholder='Tel: +998...'
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

export default FormOneB;
