import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Rockets from './components/Rockets/Rockets';
import Profile from './components/profile/Profile';
import Mission from './components/navbar/mission/Mission';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/" element={<Rockets />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
