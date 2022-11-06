import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contacts-slice';
import { filterReducer } from './filter/filter-slice';
import authReducer from './auth/auth-slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
    filter: filterReducer,
  },
});