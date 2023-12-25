import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import Timer from '../Timer/index';
import QuestionForm from './QuestionForm';
import QuestionList from './QuestionList';

const ExamContainer = () => {
  const examDetails = useSelector((state) => state.examDetailsReducer);

  return (
    <>
      <div className={'timer-details-container'}>
        <div className={'candidate-name'}>{examDetails.studentDetails.fullName}</div>
        <Timer />
      </div>
      <Grid container spacing={2} className={'exam-container'} alignItems={'stretch'}>
        <Grid item xs={3}>
          <QuestionList />
        </Grid>
        <Grid item xs={9}>
          <QuestionForm />
        </Grid>
      </Grid>
    </>
  );
};

export default ExamContainer;
