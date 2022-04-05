import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favorites: JSON.parse(localStorage.getItem("favorites_bored")) || [],
  },
  reducers: {
    addFavorite: (state, action) => {
      if (
        !state.favorites.find((activity) => activity.id === action.payload.id)
      )
        state.favorites = [...state.favorites, action.payload];
      localStorage.setItem("favorites_bored", JSON.stringify(state.favorites));
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (activity) => activity.id !== action.payload.id
      );
      localStorage.setItem("favorites_bored", JSON.stringify(state.favorites));
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
