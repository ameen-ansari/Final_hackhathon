import { Route, Routes } from 'react-router-dom';
import style from './App.module.css';
import Login from './pages/authentication/Login';
import SignUp from './pages/authentication/SignUp';
import Home from './pages/Home/Home';
import Services from './pages/Home/Services';
import AddServices from './pages/admin/AddServices';

function App() {
  return (
    <div className={style.parent}>
      {/* hello world */}
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/addservices' element={<AddServices />} />
      </ Routes>
    </div>
  );
}

export default App;
