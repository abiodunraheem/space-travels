import './App.css';
import Header from './components/header/Header';
import Mission from './components/mission/Mission';
import Profile from './components/profile/Profile';
import Rocket from './components/rocket/Rocket';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Route exact path="/" element={<Rocket />} /> */}
        <Route path="/mission" element={<Mission />} />
        <Route path="/rocket" element={<Rocket />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
