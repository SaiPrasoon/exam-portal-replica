import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { updateSelectedQuestion } from '../../actions/index';

const QuestionList = () => {
  const examDetails = useSelector((state) => state.examDetailsReducer);

  const questionList = examDetails.questionList;
  const selectedQuestion = examDetails.selectedQuestion;

  const dispatch = useDispatch();

  const handleQuestionSelect = (question) => {
    dispatch(updateSelectedQuestion(question));
  };

  const getQuestionNumberHighlightClass = (question) => {
    if (question.id === selectedQuestion.id) {
      return 'selected-question';
    } else if (question.answer) {
      return 'answered';
    } else {
      return 'unanswered';
    }
  };
  return (
    <>
      <div className={'question-list-container'}>
        <div className={'heading'}>Select a Question</div>
        <Grid container alignItems={'stretch'} spacing={2}>
          {questionList.map((question, index) => {
            return (
              <Grid item xs={4} key={`question_${question.id}`}>
                <div
                  className={`question-number ${getQuestionNumberHighlightClass(question)}`}
                  onClick={() => handleQuestionSelect(question)}
                >
                  {index + 1}
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
};

export default QuestionList;
