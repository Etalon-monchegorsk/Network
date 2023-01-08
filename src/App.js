import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import { Routes, Route } from 'react-router-dom';
import Messages from './components/Messages/Messages';


function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path='/profile' element={<Profile />} />
        <Route path='/messages' element={<Messages />} />
      </Routes>
    </div>
  );
}

export default App;
