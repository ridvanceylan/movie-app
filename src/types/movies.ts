export interface Movie {
    imdbID: string;
    Title: string;
    Year?: string;
    Poster: string;
    Type?: string;
  }
  
  export interface MovieDetails {
    Title: string;
    Year: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Actors: string;
    Plot: string;
    imdbRating: string;
    Poster: string;
  }