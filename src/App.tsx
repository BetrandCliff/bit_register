import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box } from '@chakra-ui/react';
import Register, { RegisterForm2, RegisterForm3 } from './components/common/register/Register';
import { Routes, Route } from 'react-router-dom';
import Notification from './utils/notifications/Notification';
import Login from './components/common/logiin/Login';
import StudentDashboard from './components/student/dashboard/Dashboard';
import { StudentResult } from './components/student/result/Result';
import Profile from './components/student/profile/Profile';
import ErrorNotification from './utils/notifications/failNotification';

function App() {
  return (
    
    <Box>
      <Routes>
           <Route path='/' element={<Login/>}/>
           <Route path='/register' element={<Register/>}/>
           <Route path='/registerForm2' element={<RegisterForm2/>}/>
           <Route path='/registerForm3' element={<RegisterForm3/>}/>
           <Route path='/notification' element={<Notification/>}/>
           <Route path='/error' element={<ErrorNotification/>}/>
           <Route path='/dashboard' element={<StudentDashboard/>}>
               <Route path='/dashboard' element={<StudentResult/>}/>     
               <Route path='/dashboard/profile' element={<Profile/>}/>     
           </Route>
      </Routes>
    </Box>
  );
}

export default App;
