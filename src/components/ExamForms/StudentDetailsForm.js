import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  updateQuestionsList,
  updateSelectedQuestion,
  updateStudentDetails,
} from '../../actions/index';
import Student from '../../assets/student-time-management.svg';
import { mockQuestions } from '../../utils/mockData';

const StudentDetailsForm = () => {
  const [studentDetails, setStudentDetails] = useState({
    fullName: '',
    studentId: '',
    branch: '',
    emailId: '',
    phoneNumber: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormDetailsChange = (event) => {
    setStudentDetails({
      ...studentDetails,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    dispatch(updateStudentDetails(studentDetails));
    fetchQuestionList();
    navigate('/form/exam');
  };

  const fetchQuestionList = () => {
    //Api call to fetch question list
    dispatch(updateQuestionsList([...mockQuestions]));
    dispatch(updateSelectedQuestion(mockQuestions[0]));
  };

  return (
    <div className={'form-container'}>
      <img src={Student} className={'student-image'} alt='Student' />
      <div className={'heading'}>Please Enter Your Details</div>
      <form className={'form'} onSubmit={handleSubmit}>
        <TextField
          variant='outlined'
          type={'text'}
          value={studentDetails.studentId}
          label='Student Id'
          name='studentId'
          className={'form-input'}
          onChange={handleFormDetailsChange}
          required
        />
        <TextField
          variant='outlined'
          type={'text'}
          value={studentDetails.fullName}
          label='Full Name'
          name='fullName'
          className={'form-input'}
          onChange={handleFormDetailsChange}
          required
        />
        <TextField
          variant='outlined'
          type={'email'}
          value={studentDetails.emailId}
          label='Email'
          name='emailId'
          className={'form-input'}
          onChange={handleFormDetailsChange}
          required
        />
        <TextField
          variant='outlined'
          type={'number'}
          value={studentDetails.phoneNumber}
          label='Mobile Number'
          name='phoneNumber'
          className={'form-input'}
          onChange={(event) => {
            event.target.value = Math.max(0, parseInt(event.target.value)).toString().slice(0, 10);
            handleFormDetailsChange(event);
          }}
          required
        />
        <TextField
          variant='outlined'
          type={'text'}
          value={studentDetails.branch}
          label='Branch Name'
          name='branch'
          className={'form-input'}
          onChange={handleFormDetailsChange}
          required
        />
        <Button type='submit' variant='contained' className={'button submit-button'}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default StudentDetailsForm;
