import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box } from '@chakra-ui/react';
import Register, { RegisterForm2, RegisterForm3 } from './components/common/register/Register';
import { Routes, Route } from 'react-router-dom';
import Notification from './utils/notifications/Notification';

function App() {
  return (
    
    <Box>
      <Routes>
           <Route path='/' element={<Register/>}/>
           <Route path='/registerForm2' element={<RegisterForm2/>}/>
           <Route path='/registerForm3' element={<RegisterForm3/>}/>
           <Route path='/notification' element={<Notification/>}/>
      </Routes>
    </Box>
  );
}

export default App;
