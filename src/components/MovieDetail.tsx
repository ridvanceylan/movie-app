import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchMovieDetails } from "../utils/api";
import { MovieDetails as MovieDetailsType } from "../types/movies";
import noImage from "../assets/No_image_available.svg";
import {
  Typography,
  Paper,
  IconButton,
  Box,
  Skeleton,
  Container,
  Stack,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const MovieDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetailsType | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadMovieDetails = async () => {
      if (id) {
        const data = await fetchMovieDetails(id);
        setMovie(data);
      }
    };
    loadMovieDetails();
  }, [id]);

  return (
    <Container sx={{ p: 4 }}>
      <Paper sx={{ padding: "20px", margin: "20px auto", maxWidth: "800px" }}>
        <IconButton onClick={() => navigate(-1)} sx={{ marginBottom: "20px" }}>
          <ArrowBackIcon />
        </IconButton>

        {movie ? (
          <>
            <Box textAlign="center" mb={2}>
              <Typography variant="h4">{movie.Title}</Typography>
            </Box>
            <img
              src={movie.Poster === "N/A" ? noImage : movie.Poster}
              alt={movie.Title}
              style={{
                width: "100%",
                maxHeight: "400px",
                objectFit: "contain",
              }}
            />
            <Stack spacing={2}>
              <Typography>Year: {movie.Year}</Typography>
              <Typography>Runtime: {movie.Runtime}</Typography>
              <Typography>Genre: {movie.Genre}</Typography>
              <Typography>Director: {movie.Director}</Typography>
              <Typography>Cast: {movie.Actors}</Typography>
              <Typography>IMDb Rating: {movie.imdbRating}</Typography>
              <Typography>Plot: {movie.Plot}</Typography>
            </Stack>
          </>
        ) : (
          <Box>
            <Skeleton variant="text" width="60%" height={40} sx={{ marginBottom: "20px" }} />
            <Skeleton variant="rectangular" width="100%" height={400} sx={{ marginBottom: "20px" }} />
            <Stack spacing={2}>
              <Skeleton variant="text" width="40%" height={30} />
              <Skeleton variant="text" width="40%" height={30} />
              <Skeleton variant="text" width="40%" height={30} />
              <Skeleton variant="text" width="40%" height={30} />
              <Skeleton variant="text" width="40%" height={30} />
              <Skeleton variant="text" width="40%" height={30} />
            </Stack>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default MovieDetails;
