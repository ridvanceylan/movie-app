import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieTable from './components/MovieTable';
import MovieDetail from './components/MovieDetail';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieTable />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
};

export default App;