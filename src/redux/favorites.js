import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      if (
        !state.favorites.find((activity) => activity.id === action.payload.id)
      )
        state.favorites = [...state.favorites, action.payload];
    },
  },
});

export const { addFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
