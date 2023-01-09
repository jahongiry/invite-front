import React from 'react';
import classes from './Types.module.css';
import weddingIcon from '../img/wedding-icon.png';
import birthdayIcon from '../img/birthday-icon.png';
import { useDispatch, useSelector } from 'react-redux';
import { chooseWedding, chooseBirthday } from '../store/typeSlice';

function Types() {
  const state = useSelector((state) => state.type);
  const dispatch = useDispatch();
  return (
    <div className={classes.typesContainer}>
      {!state.weddingCard && (
        <div
          className={classes.wedding}
          onClick={() => dispatch(chooseWedding())}
        >
          <img className={classes.imageWedding} src={weddingIcon}></img>
          <h3>Turmush qurish uchun</h3>
        </div>
      )}

      {state.weddingCard && (
        <div className={classes.wedding2}>
          <div className={classes.xContainer}>
            <img className={classes.imageWedding2} src={weddingIcon}></img>
            <div className={classes.xIcon}>
              <ion-icon name='checkmark-outline'></ion-icon>
            </div>
          </div>
          <h3>Turmush qurish uchun</h3>
        </div>
      )}

      {!state.birthdayCard && (
        <div
          className={classes.birthday}
          onClick={() => dispatch(chooseBirthday())}
        >
          {' '}
          <img className={classes.imageBirthday} src={birthdayIcon}></img>
          <h3>Tug'ilgan kun bazmi uchun</h3>
        </div>
      )}

      {state.birthdayCard && (
        <div className={classes.birthday2}>
          <div className={classes.xContainer}>
            <img className={classes.imageBirthday2} src={birthdayIcon}></img>
            <div className={classes.xIcon}>
              <ion-icon name='checkmark-outline'></ion-icon>
            </div>
          </div>
          <h3>Tug'ilgan kun bazmi uchun</h3>
        </div>
      )}
    </div>
  );
}

export default Types;
