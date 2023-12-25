import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ExamContainer from './ExamContainer';
import StudentDetailsForm from './StudentDetailsForm';

const FormLayout = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/form/exam' element={<ExamContainer />} />
          <Route path='/' element={<StudentDetailsForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default FormLayout;
