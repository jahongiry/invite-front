import React, { useEffect, useState } from 'react';
import classes from './FormTwo.module.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { moveCard, formTwo } from '../store/formSlice';
import { useRef } from 'react';

function FormTwo() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [value, onChange] = useState('17:00');
  const [manzilim, setManzilim] = useState('');
  const dispatch = useDispatch();

  const sana = useRef('');
  const soat = useRef('');
  const manzil = useRef('');
  const state = useSelector((state) => state.form);
  const handleChange = (event) => {
    setManzilim(event.target.value);
  };
  const handleSubmit = (event) => {
    selectedDate.setMinutes(
      selectedDate.getMinutes() - selectedDate.getTimezoneOffset()
    );
    let payload = {
      sana: selectedDate,
      soat: value,
      manzil: manzil.current.value,
    };
    dispatch(formTwo(payload));
    event.preventDefault();
  };
  return (
    <div>
      <Link onClick={() => dispatch(moveCard())} className={classes.ortga}>
        <div className={classes.icon}>
          {' '}
          <ion-icon name='chevron-back-outline'></ion-icon>
        </div>
        <h5>Ortga qaytish</h5>
      </Link>
      <div className={classes.details}>
        <h1>Salom, so'ngi malumotlarni kiritamiz.</h1>
        <form className={classes.form} onSubmit={handleSubmit}>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            placeholderText='Marosim sanasi'
            className={classes.datePicking}
            dateFormat='MM/dd/yyyy'
            minDate={new Date()}
            ref={sana}
          />
          <TimePicker
            clearIcon={false}
            onChange={onChange}
            value={value}
            ref={soat}
          />
          <input
            className={classes.manzil}
            type='text'
            onChange={handleChange}
            ref={manzil}
            placeholder="Marosim bo'ladigan manzilni kiriting..."
          ></input>
          <button className={classes.nextButton} type='submit'>
            Taklifnoma yaratish
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormTwo;
