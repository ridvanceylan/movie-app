import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../../types/movies";

interface MovieState {
  movies: Movie[];
  totalResults: number;
  currentPage: number;
  type: string;
  year: string;
  searchTerm: string;
}

const initialState: MovieState = {
  movies: [],
  totalResults: 0,
  currentPage: 1,
  type: "",
  year: "",
  searchTerm: "Pokemon",
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies(state, action: PayloadAction<Movie[]>) {
      state.movies = action.payload;
    },
    setTotalResults(state, action: PayloadAction<number>) {
      state.totalResults = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setType(state, action: PayloadAction<string>) {
      state.type = action.payload;
      state.currentPage = 1;
    },
    setYear(state, action: PayloadAction<string>) {
      state.year = action.payload;
      state.currentPage = 1;
    },
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
  },
});

export const {
  setMovies,
  setTotalResults,
  setCurrentPage,
  setType,
  setYear,
  setSearchTerm,
} = moviesSlice.actions;
export default moviesSlice.reducer;
