import React from 'react'
import Box from '@mui/material/Box';
import { Route, Routes } from 'react-router-dom';
import Navebar from './components/Navebar';
import ExerciseDetails from './pages/ExerciseDetails';
import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css'
const App = () => {
  return (
    <Box width="400px" sx={{width:{x1:'1488px'}}} m='auto'>
      <Navebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='./exercises' element={<ExerciseDetails />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App