import { configureStore } from '@reduxjs/toolkit';
import formSlice from './formSlice';
import formSliceB from './formSliceB';
import imageSlice from './imageSlice';
import typeSlice from './typeSlice';

const store = configureStore({
  reducer: {
    form: formSlice,
    formB: formSliceB,
    image: imageSlice,
    type: typeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
