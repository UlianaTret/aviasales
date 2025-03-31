/* eslint-disable no-undef */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import error from 'eslint-plugin-react/lib/util/error';

export const fetchTickets = createAsyncThunk('tickets/fetchTickets', async function (searchId, { rejectWithValue }) {
  if (!searchId) {
    try {
      const response = await fetch('https://aviasales-test-api.kata.academy/search');
      const searchId = await response.json();
      if (!response.ok) {
        throw new Error('Не удлось получить доступ');
      }
      return { data: { stop: false, tickets: [] }, searchId };
    } catch (e) {
      return rejectWithValue(error);
    }
  } else {
    try {
      const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId.searchId}`);
      if (!response.ok) {
        throw new Error('Не удалось загрузить билеты');
      }
      const data = await response.json();
      return { data: data };
    } catch (e) {
      return rejectWithValue(error.name);
    }
  }
});

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    tickets: [],
    filters: null,
    filteredTickets: [],
    ticketsCount: 5,
    flagStop: false,
    searchId: null,
    status: null,
    error: null,
  },
  reducers: {
    choiceTransfer(state, action) {
      state.filters = action.payload.filters;
      if (!state.filters.includes('AllTransfer')) {
        const arr = action.payload.filters;
        state.filteredTickets = [...state.tickets].filter((trip) => {
          return arr.includes(trip.segments[0].stops.length) && arr.includes(trip.segments[1].stops.length);
        });
      } else state.filteredTickets = [...state.tickets];
    },
    showCheapest(state) {
      choiceTransfer(state, { payload: state.filters });
      state.filteredTickets = [...state.filteredTickets].sort((a, b) =>
        a.price < b.price ? -1 : a.price > b.price ? 1 : 0
      );
    },
    showFastest(state) {
      choiceTransfer(state, { payload: state.filters });
      state.filteredTickets = [...state.filteredTickets].sort((tripA, tripB) => {
        const a = tripA.segments[0].duration + tripA.segments[1].duration;
        const b = tripB.segments[0].duration + tripB.segments[1].duration;
        return a - b;
      });
    },
    showOptimal(state) {
      choiceTransfer(state, { payload: state.filters });
      state.filteredTickets = [...state.filteredTickets]
        .sort((tripA, tripB) => {
          const a = tripA.segments[0].duration + tripA.segments[1].duration;
          const b = tripB.segments[0].duration + tripB.segments[1].duration;
          return a - b;
        })
        .sort((a, b) => a.price - b.price);
    },
    showMoreTickets(state, action) {
      state.ticketsCount = action.payload.ticketsCount;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchTickets.pending, (state) => {
        state.status = 'loading';
        state.error = false;
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.status = action.payload.data.stop ? 'loaded' : 'loading';
        state.error = false;
        state.tickets = [...state.tickets, ...action.payload.data.tickets];
        state.filteredTickets = [...state.filteredTickets, ...action.payload.data.tickets];
        state.flagStop = action.payload.data.stop;
        if (action.payload.searchId) state.searchId = action.payload.searchId;
      })
      .addCase(fetchTickets.rejected, (state) => {
        state.status = 'not loaded';
        state.error = true;
      });
  },
});

export const { choiceTransfer, showCheapest, showFastest, showOptimal, showMoreTickets } = ticketsSlice.actions;

export default ticketsSlice.reducer;
