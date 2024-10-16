import './App.css';

import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';

function Hello() {
  return <div>HarmOni</div>;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
