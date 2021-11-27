import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from 'react-router-dom';
import { ForgotPassword } from './components/ForgotPassword';
import { Home } from './components/Home';
import { Landing } from './components/Landing';
import { Login } from './components/Login';
import { ResetPassword } from './components/ResetPassword';
import { Signup } from './components/Signup';

function App() {
  const url = "https://nodejs-tasks-all.herokuapp.com/api/password-reset-task"

  return (
    <>
    {/* <Login/> */}
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing/>}></Route>
        <Route exact path="/login" element={<Login url={url}/>}></Route>
        <Route exact path="/signup" element={<Signup url={url}/>}></Route>
        <Route exact path ='/home' element={<Home url={url}/> }></Route>
        <Route exact path='/forgotpassword' element={<ForgotPassword url={url}/>}></Route>
        <Route exact path='/resetpassword/:id/:token' element={<ResetPassword url={url}/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
