import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  formOrder0: true,
  formOrder1: false,
  formOrder2: false,
  card_id: 10,
  cardImage: '',
  mehmon: '',
  mezbon: '',
  phoneNumber: '',
  date: '',
  time: '',
  location: '',
  finalImage: '',
  loading: false,
  error: '',
};

export const fetchCreateInvitationsB = createAsyncThunk(
  'invites/fetchCreateInvitation',
  async (payload) => {
    return axios
      .post('https://octopus-app-iohhm.ondigitalocean.app/birthdays', {
        mehmon: payload.mehmon,
        mezbon: payload.mezbon,
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

const formSliceB = createSlice({
  name: 'formB',
  initialState,
  reducers: {
    chooseCardB: (state, action) => {
      state.card_id = action.payload;
    },
    linkCardB: (state, action) => {
      state.cardImage = action.payload;
    },
    moveCard: (state) => {
      state.formOrder0 = !state.formOrder0;
      state.formOrder1 = !state.formOrder1;
    },
    formOne: (state, action) => {
      state.mehmon = action.payload.mehmon;
      state.mezbon = action.payload.mezbon;
      state.phoneNumber = action.payload.telefon;
    },
    formTwo: (state, action) => {
      state.date = action.payload.sana;
      state.time = action.payload.soat;
      state.location = action.payload.manzil;
      state.formOrder0 = false;
      state.formOrder1 = false;
      state.formOrder2 = true;
    },
    resetB: (state) => {
      state.formOrder0 = true;
      state.formOrder1 = false;
      state.formOrder2 = false;
      state.card_id = 1;
      state.cardImage = '';
      state.mehmon = '';
      state.mezbon = '';
      state.phoneNumber = '';
      state.date = '';
      state.time = '';
      state.location = '';
      state.finalImage = '';
      state.error = '';
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCreateInvitationsB.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCreateInvitationsB.fulfilled, (state, action) => {
      state.finalImage = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchCreateInvitationsB.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { chooseCardB, moveCard, formOne, formTwo, linkCardB, resetB } =
  formSliceB.actions;
export default formSliceB.reducer;
