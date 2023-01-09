import React, { useEffect } from 'react';
import { Form, Link } from 'react-router-dom';
import classes from './CardFilling.module.css';
import cardSample from '../img/2.png';
import FormOne from './FormOne';
import FormTwo from './FormTwo';
import { useSelector, useDispatch } from 'react-redux';
import FinalInvitation from './FinalInvitation';
import { saveAs } from 'file-saver';
import { reset } from '../store/formSlice';
import FormOneB from './Birthday/FormOneB';
import FormTwoB from './Birthday/FormTwoB';

function CardFilling() {
  const cardImage = useSelector((state) => state.form.cardImage);
  const card_order = useSelector((state) => state.form.formOrder);
  const card_order2 = useSelector((state) => state.form.formOrder2);
  const card_order1 = useSelector((state) => state.form.formOrder1);
  const card_orderB0 = useSelector((state) => state.formB.formOrder0);
  const card_orderB1 = useSelector((state) => state.formB.formOrder1);
  const card_orderB2 = useSelector((state) => state.formB.formOrder2);
  const names = useSelector((state) => state.form);
  const image = useSelector((state) => state.image);
  const finalImage = useSelector((state) => state.form.finalImage);
  const type = useSelector((state) => state.type);

  const dispatch = useDispatch();

  const downloadImage = () => {
    saveAs(finalImage, `taklifnoma(${names.groom}&${names.bride}).png`);
  };
  return (
    <div className={classes.cardFilling}>
      {card_order1 && (
        <Link
          to='/'
          className={classes.cardMoreDesign}
          onClick={() => dispatch(reset())}
        >
          <div className={classes.leftIcon}>
            <ion-icon name='chevron-back-outline'></ion-icon>
          </div>
          <span>Boshqa tanlash</span>
        </Link>
      )}
      {!card_order1 && (
        <Link
          to='/'
          className={classes.cardMoreDesign2}
          onClick={() => dispatch(reset())}
        >
          <div className={classes.leftIcon}>
            <ion-icon name='chevron-back-outline'></ion-icon>
          </div>
          <span>Boshqa tanlash</span>
        </Link>
      )}
      <div className={classes.cardBox}>
        {!finalImage && <img className={classes.image} src={cardImage}></img>}
        {finalImage && (
          <button onClick={downloadImage} className={classes.buttonDownload}>
            <ion-icon name='download-outline'></ion-icon> Ko'chirib olish
          </button>
        )}
        {finalImage && <img className={classes.image} src={finalImage}></img>}
      </div>
      {type.weddingForm && (
        <div className={classes.formBox}>
          {card_order1 && <FormOne />}
          {card_order && <FormTwo />}
          {card_order2 && <FinalInvitation />}
        </div>
      )}
      {type.birthdayForm && (
        <div className={classes.formBox}>
          {card_orderB0 && <FormOneB />}
          {card_orderB1 && <FormTwoB />}
          {card_orderB2 && <FinalInvitation />}
        </div>
      )}
    </div>
  );
}

export default CardFilling;
