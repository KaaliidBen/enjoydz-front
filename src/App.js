import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Welcome from './welcome/Welcome'
import LoginPage from './log/Login';
import Signup from './log/Signup';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Welcome/>}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
    </Routes>
  );
}

export default App;
