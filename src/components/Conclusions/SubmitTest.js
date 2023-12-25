import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PentagonLoading from '../../assets/multi-shape-loader.json';
import Success from '../../assets/successfully-done.json';
import Failed from '../../assets/failed-mail.json';
import { SUBMIT_STATUS_TYPES } from '../../utils/constants';

const SubmitTest = () => {
  const examDetails = useSelector((state) => state.examDetailsReducer);
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(SUBMIT_STATUS_TYPES.SUCCESS);

  const submitExam = () => {
    //api call to submit Data
  };

  useEffect(() => {
    submitExam();
  }, []);

  return (
    <div>
      {loading ? (
        <div className={'saving-container'}>
          <Lottie animationData={PentagonLoading} loop={true} className={'gif'} />
          <div className={'saving-text'}>Please wait while we save your answers ...</div>
        </div>
      ) : null}

      {submitStatus === SUBMIT_STATUS_TYPES.SUCCESS ? (
        <div className={'submit-status-container'}>
          <Lottie animationData={Success} loop={true} className={'gif'} />
          <div className={'saving-text'}>Answers have been saved Successfully.</div>
        </div>
      ) : (
        <div className={'saving-container'}>
          <Lottie animationData={Failed} loop={true} className={'gif'} />
          <div className={'saving-text'}>Answers could not be saved. Please contact Admin.</div>
        </div>
      )}
    </div>
  );
};

export default SubmitTest;
