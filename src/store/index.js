import { configureStore } from '@reduxjs/toolkit';

import ticketsReduser from './ticketsSlice';

export default configureStore({
  reducer: {
    tickets: ticketsReduser,
  },
});
