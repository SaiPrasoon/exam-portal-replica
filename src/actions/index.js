import { actionTypes } from './actionTypes';

export const updateStudentDetails = (studentDetails) => {
  return {
    type: actionTypes.UPDATE_STUDENT_DETAILS,
    payload: studentDetails,
  };
};
export const updateQuestionsList = (questionList) => {
  return {
    type: actionTypes.UPDATE_QUESTIONS_LIST,
    payload: questionList,
  };
};
export const updateSelectedQuestion = (selectedQuestionId) => {
  return {
    type: actionTypes.UPDATE_SELECTED_QUESTION,
    payload: selectedQuestionId,
  };
};
