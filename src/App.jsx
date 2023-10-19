import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Container from './Components/Container';
import Fear from './Components/Fear/Fear';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/fear" element={<Fear />} />
      </Routes>
    </Router>
  );
};

export default App;
