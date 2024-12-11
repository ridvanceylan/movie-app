# Movie App

Movie App is a React-based application that allows users to search for movies, TV series, and episodes. Users can filter results by type and release year, view detailed information about a specific movie, and navigate between pages using a pagination feature. The application leverages modern technologies such as Redux Toolkit, Material-UI, and Lodash.

## Tech Stack


  - React
  - Redux Toolkit
  - Material-UI
  - Lodash (for debounce functionality)
  - Axios (for API requests)
  - Vite
  - TypeScript

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ridvanceylan/movie-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd movie-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open the application in your browser at [http://localhost:5173](http://localhost:5173).


## API Integration

The app integrates with the OMDB API to fetch movie data. To use this app, you need an API key from [OMDB](https://www.omdbapi.com/).

1. Obtain an API key by registering on the OMDB website.
2. Add your API key in the `src/utils/constant.ts` file:

```typescript
const API_KEY = 'your-api-key';
```


