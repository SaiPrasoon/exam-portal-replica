import { actionTypes } from '../actions/actionTypes';

const initialState = {
  studentDetails: {
    fullName: '',
    studentId: '',
    branch: '',
    emailId: '',
    phoneNumber: '',
  },
  questionList: [],
  selectedQuestion: null,
};

const examDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_STUDENT_DETAILS:
      return {
        ...state,
        studentDetails: action.payload,
      };
    case actionTypes.UPDATE_QUESTIONS_LIST:
      return {
        ...state,
        questionList: action.payload,
      };
    case actionTypes.UPDATE_SELECTED_QUESTION:
      return {
        ...state,
        selectedQuestion: action.payload,
      };
    default:
      return state;
  }
};
export default examDetailsReducer;
