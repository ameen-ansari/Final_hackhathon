import { Route, Routes } from 'react-router-dom';
import style from './App.module.css';
import Login from './pages/authentication/Login';
import SignUp from './pages/authentication/SignUp';

function App() {
  return (
    <div className={style.parent}>
      {/* hello world */}
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </ Routes>
    </div>
  );
}

export default App;
