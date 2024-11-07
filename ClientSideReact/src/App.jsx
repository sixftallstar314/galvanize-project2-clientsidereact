import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import LocationDetail from './components/LocationDetail';
import ResidentDetails from './components/ResidentDetails';
import './styles/styles.css';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CharacterList />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
        <Route path="/location/:id" element={<LocationDetail />}/>
        <Route path="/location/:id/residents" element={<ResidentDetails/>}/>
      </Routes>
    </Router>
  );
};

export default App;