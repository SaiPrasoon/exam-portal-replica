import { Button } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateQuestionsList, updateSelectedQuestion } from '../../actions/index';
import AnswerControl from '../AnswerControl/index';
import ConfirmationModal from '../Modals/ConfirmationModal';

const QuestionForm = () => {
  const examDetails = useSelector((state) => state.examDetailsReducer);

  const selectedQuestion = examDetails.selectedQuestion;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [questionList, setQuestionList] = useState(examDetails.questionList);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const questionIndex = questionList.findIndex((question) => question.id === selectedQuestion.id);

  const handleAnswerChange = (value) => {
    const updatedList = [...questionList];
    updatedList[questionIndex].answer = value;

    setQuestionList([...updatedList]);
    dispatch(updateQuestionsList([...updatedList]));
    dispatch(updateSelectedQuestion(updatedList[questionIndex]));
  };

  const handlePreviousClick = () => {
    dispatch(updateSelectedQuestion(questionList[questionIndex - 1]));
  };

  const handleNextClick = () => {
    dispatch(updateSelectedQuestion(questionList[questionIndex + 1]));
  };

  const handleSubmit = () => {
    navigate('/submit-test');
  };

  const showPreviousButton = () => {
    return questionIndex !== 0;
  };

  const showNextButton = () => {
    return questionIndex !== questionList.length - 1;
  };

  const showSubmitButton = () => {
    return questionIndex === questionList.length - 1;
  };

  const closeConfirmationModal = () => {
    setIsConfirmationModalOpen(false);
  };

  return (
    <>
      {isConfirmationModalOpen && (
        <ConfirmationModal
          id='confirmationModal'
          message='Are you sure you want to submit the test ?'
          open={isConfirmationModalOpen}
          onClose={closeConfirmationModal}
          onSubmit={handleSubmit}
        />
      )}
      <div className={'question-form-container'}>
        <AnswerControl questionData={selectedQuestion} onChange={handleAnswerChange} />
        <div className={'buttons-container'}>
          {showPreviousButton() ? (
            <Button variant='contained' color='secondary' onClick={handlePreviousClick}>
              Previous
            </Button>
          ) : null}

          {showNextButton() ? (
            <Button variant='contained' onClick={handleNextClick}>
              Next
            </Button>
          ) : null}
          {showSubmitButton() ? (
            <Button
              variant='contained'
              color='success'
              onClick={() => setIsConfirmationModalOpen(true)}
            >
              Submit
            </Button>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default QuestionForm;
