import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import instance from 'api/auth';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, ThunkAPI) => {
    try {
      const response = await instance.get('/contacts');
      return response.data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, ThunkAPI) => {
    try {
      const response = await instance.post('/contacts', data);
      return response.data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, ThunkAPI) => {
    try {
      const response = await instance.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);