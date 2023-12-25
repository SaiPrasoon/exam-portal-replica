import { Button } from '@mui/material';
import React from 'react';
import robotGif from '../../assets/hi-robot.gif';
import './Robot.css';
import { Link } from 'react-router-dom/dist';

const Robot = () => {
  return (
    <div className='container'>
      <div className='robot-message-content'>
        <img src={robotGif} alt='Index' className='robot-image' />
      </div>
      <Link to='/form'>
        <Button variant='contained'>Start Assessment</Button>
      </Link>
    </div>
  );
};

export default Robot;
