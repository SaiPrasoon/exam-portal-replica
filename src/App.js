import './App.css';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SubmitTest from './components/Conclusions/SubmitTest';
import ExamContainer from './components/ExamForms/ExamContainer';
import StudentDetailsForm from './components/ExamForms/StudentDetailsForm';
import Robot from './components/Robot/robot';

function App() {

  useEffect(() => {
    // handle.enter();
  }, []);
  return (
    <div className='main-container'>
        <BrowserRouter>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              width: '100%',
              padding: '1%',
              backgroundColor: '#253644',
              top: 0,
            }}
          ></Box>
          <Routes>
            <Route path='/' element={<Robot />} />
            <Route path='/form' element={<StudentDetailsForm />} />
            <Route path='/form/exam' element={<ExamContainer />} />
            <Route path='/submit-test' element={<SubmitTest />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
