import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  formOrder1: true,
  formOrder: false,
  card_id: 10,
  cardImage: '',
  groom: '',
  bride: '',
  phoneNumber: '',
  date: '',
  time: '',
  location: '',
  formOrder2: false,
  finalImage: '',
  loading: false,
  error: '',
};

export const fetchCreateInvitations = createAsyncThunk(
  'invites/fetchCreateInvitation',
  async (payload) => {
    return axios
      .post('https://octopus-app-iohhm.ondigitalocean.app/weddings', {
        kuyov: payload.groom,
        kelin: payload.bride,
        card: payload.card_id,
        tel: payload.phoneNumber,
        sana: payload.date,
        soat: payload.time,
        manzil: payload.location,
      })
      .then((response) => {
        return response.data;
      });
  }
);

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    chooseCard: (state, action) => {
      state.card_id = action.payload;
    },
    linkCard: (state, action) => {
      state.cardImage = action.payload;
    },
    moveCard: (state) => {
      state.formOrder = !state.formOrder;
      state.formOrder1 = !state.formOrder1;
    },
    formOne: (state, action) => {
      state.groom = action.payload.kuyov;
      state.bride = action.payload.kelin;
      state.phoneNumber = action.payload.telefon;
    },
    formTwo: (state, action) => {
      state.date = action.payload.sana;
      state.time = action.payload.soat;
      state.location = action.payload.manzil;
      state.formOrder = false;
      state.formOrder2 = !state.formOrder2;
    },
    reset: (state) => {
      state.formOrder1 = true;
      state.formOrder = false;
      state.card_id = 1;
      state.cardImage = '';
      state.groom = '';
      state.bride = '';
      state.phoneNumber = '';
      state.date = '';
      state.phoneNumber = '';
      state.time = '';
      state.location = '';
      state.finalImage = '';
      state.error = '';
      state.formOrder2 = false;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCreateInvitations.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCreateInvitations.fulfilled, (state, action) => {
      state.finalImage = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchCreateInvitations.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { chooseCard, moveCard, formOne, formTwo, linkCard, reset } =
  formSlice.actions;
export default formSlice.reducer;
