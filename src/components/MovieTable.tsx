import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchMovies } from "../utils/api";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Container,
} from "@mui/material";
import Pagination from "./Pagination";
import debounce from "lodash/debounce";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import {
  setMovies,
  setCurrentPage,
  setType,
  setYear,
  setTotalResults,
  setSearchTerm,
} from "../store/slice/moviesSlice";

const MovieTable: React.FC = () => {
  const dispatch = useDispatch();
  const { movies, searchTerm, totalResults, currentPage, year, type } =
    useSelector((state: RootState) => state.movies);

  const navigate = useNavigate();

  const debouncedSearch = debounce((newSearchTerm: string) => {
    dispatch(setSearchTerm(newSearchTerm));
  }, 500);

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchMovies({
        s: searchTerm,
        type: type,
        y: year,
        page: currentPage.toString(),
      });
      dispatch(setMovies(data.Search || []));
      dispatch(setTotalResults(parseInt(data.totalResults, 10) || 0));
    };
    loadMovies();
  }, [searchTerm, year, type, currentPage, dispatch]);

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
  };

  return (
    <Container sx={{ p: 4 }}>
      <TextField
        label="Search Movies"
        variant="outlined"
        onChange={handleSearchChange}
        fullWidth
        style={{ marginBottom: "20px" }}
      />
      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <TextField
          label="Year"
          type="number"
          value={year}
          onChange={(e) => dispatch(setYear(e.target.value))}
          fullWidth
        />
        <FormControl fullWidth variant="outlined">
          <InputLabel id="type-select-label">Type</InputLabel>
          <Select
            labelId="type-select-label"
            value={type}
            onChange={(e) => dispatch(setType(e.target.value))}
            label="Type"
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="movie">Movies</MenuItem>
            <MenuItem value="series">TV Series</MenuItem>
            <MenuItem value="episode">Episodes</MenuItem>
          </Select>
        </FormControl>
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Release Date</TableCell>
              <TableCell>IMDb ID</TableCell>
              <TableCell>Type</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {movies?.map((movie) => (
              <TableRow
                key={movie.imdbID}
                onClick={() => navigate(`/movie/${movie.imdbID}`)}
                style={{ cursor: "pointer" }}
              >
                <TableCell>{movie.Title}</TableCell>
                <TableCell>{movie.Year}</TableCell>
                <TableCell>{movie.imdbID}</TableCell>
                <TableCell>{movie.Type}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        totalResults={totalResults}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </Container>
  );
};

export default MovieTable;
