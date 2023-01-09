// import React, { useEffect } from 'react';
// import { Form, Link } from 'react-router-dom';
// import classes from './CardFilling.module.css';
// import cardSample from '../img/2.png';
// import FormOne from './FormOneB';
// import FormTwo from './FormTwo';
// import { useSelector, useDispatch } from 'react-redux';
// import FinalInvitation from './FinalInvitation';
// import { saveAs } from 'file-saver';
// import { reset } from '../store/formSlice';

// function CardFilling() {
//   const cardImage = useSelector((state) => state.form.cardImage);
//   const card_order = useSelector((state) => state.form.formOrder);
//   const card_order2 = useSelector((state) => state.form.formOrder2);
//   const card_order1 = useSelector((state) => state.form.formOrder1);
//   const names = useSelector((state) => state.form);
//   const image = useSelector((state) => state.image);
//   const finalImage = useSelector((state) => state.form.finalImage);

//   const dispatch = useDispatch();

//   const downloadImage = () => {
//     saveAs(finalImage, `taklifnoma(${names.groom}&${names.bride}).png`);
//   };
//   return (
//     <div className={classes.cardFilling}>
//       {card_order1 && (
//         <Link
//           to='/'
//           className={classes.cardMoreDesign}
//           onClick={() => dispatch(reset())}
//         >
//           <div className={classes.leftIcon}>
//             <ion-icon name='chevron-back-outline'></ion-icon>
//           </div>
//           <span>Boshqa tanlash</span>
//         </Link>
//       )}
//       {!card_order1 && (
//         <Link
//           to='/'
//           className={classes.cardMoreDesign2}
//           onClick={() => dispatch(reset())}
//         >
//           <div className={classes.leftIcon}>
//             <ion-icon name='chevron-back-outline'></ion-icon>
//           </div>
//           <span>Boshqa tanlash</span>
//         </Link>
//       )}
//       <div className={classes.cardBox}>
//         {!finalImage && <img className={classes.image} src={cardImage}></img>}
//         {finalImage && (
//           <button onClick={downloadImage} className={classes.buttonDownload}>
//             <ion-icon name='download-outline'></ion-icon> Ko'chirib olish
//           </button>
//         )}
//         {finalImage && <img className={classes.image} src={finalImage}></img>}
//       </div>
//       <div className={classes.formBox}>
//         {card_order1 && <FormOne />}
//         {card_order && <FormTwo />}
//         {card_order2 && <FinalInvitation />}
//       </div>
//     </div>
//   );
// }

// export default CardFilling;
