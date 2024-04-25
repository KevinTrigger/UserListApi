import { createSlice, PayloadAction} from "@reduxjs/toolkit";


const searchSlice = createSlice({
  name: 'people',
  initialState: {
    value: ''
  },
  reducers: {
    handleChangeSearch: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    handleRemoveSearch: (state) => {
      state.value = '';
    }
  }
})

export const { handleChangeSearch, handleRemoveSearch } = searchSlice.actions;

export default searchSlice.reducer;