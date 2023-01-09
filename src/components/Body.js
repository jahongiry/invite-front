import React, { useState, useEffect } from 'react';
import classes from './Body.module.css';
import Card from './Card';
import image1 from '../img/1.png';
import image2 from '../img/2.png';
import { fetchImages } from '../store/imageSlice';
import { useDispatch, useSelector } from 'react-redux';
import userEvent from '@testing-library/user-event';
import Types from './Types';
import { birthdayForm, weddingForm } from '../store/typeSlice';

function Body() {
  const images = useSelector((state) => state.image);
  const typeState = useSelector((state) => state.type);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchImages());
  }, []);
  return (
    <div>
      <h2>Chiroyli, onson va qulay</h2>
      <Types />
      <p>Shunchaki yoqtirganingizni tanlang va malumotlar kiriting!</p>
      {images.loading && <div>Loading...</div>}
      {!images.loading && images.error ? (
        <div>Error: {images.error}</div>
      ) : null}
      {typeState.wedding && !images.loading && images.image.length ? (
        <div className={classes.cards} onClick={() => dispatch(weddingForm())}>
          {images.image.map((card) => (
            <Card key={card[0]} image={card[1]} card_id={card[0]} />
          ))}
        </div>
      ) : null}
      {typeState.birthday && !images.loading && images.image.length ? (
        <div className={classes.cards} onClick={() => dispatch(birthdayForm())}>
          {images.imageBirthday.map((card) => (
            <Card key={card[0]} image={card[1]} card_id={card[0]} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default Body;
