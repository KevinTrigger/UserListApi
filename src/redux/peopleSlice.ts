import axios from "axios";
import { createSlice, PayloadAction, createAsyncThunk} from "@reduxjs/toolkit";
import { Person, PeopleProps } from "../types/types";
import { API_GET_PEOPLE_URL } from "../api/constants";

const initialState: PeopleProps = {
  list: [],
  loading: false,
  error: null,
}

export const fetchPeople = createAsyncThunk<Person[], undefined, { rejectValue: string }>(
  'people/fetchPeople',
  async function (_, { rejectWithValue }) {
    try {
      const response = await axios.get(API_GET_PEOPLE_URL);
      if (response.status == 200) {
        return response.data.results
      };
    }

    catch (error) {
      console.error(error);
    }
  }
)

const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    setActivePerson: (state, action: PayloadAction<string>) => {
      state.list.map(person => {
        person.email === action.payload ? 
        person.isActive = true 
        : 
        person.isActive = false;
      });
    },
    onDeletePerson: (state) => {
      state.list = state.list.filter(person => !person.isActive)
    }, 
    onRefreshUsers: (state) => {
      state.loading = true;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPeople.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPeople.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
  }
})

export const { setActivePerson, onDeletePerson } = peopleSlice.actions;

export default peopleSlice.reducer;