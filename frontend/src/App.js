import { Route, Routes, useNavigate } from 'react-router-dom';
import style from './App.module.css';
import Login from './pages/authentication/Login';
import SignUp from './pages/authentication/SignUp';
import Home from './pages/Home/Home';
import Services from './pages/Home/Services';
import AddServices from './pages/admin/AddServices';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  const navigate = useNavigate()
  useEffect(() => {
    try {
      const token = localStorage.getItem('404Unbreakable')
      axios.post('http://localhost:800/manageauth', { token: token }).then((res) => {
        console.log(res.data.message);
        if (res.data.message !== 'verified') {
          alert('user not  verified')
          navigate('/login')
        } else {
          alert('user verified')
        }
      })
    }
    catch (error) {
      console.log(error);
    }
  }, [])
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
