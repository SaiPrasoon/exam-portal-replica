import React from 'react';
import { useNavigate } from 'react-router-dom';

const Timer = () => {
  const [countDown, setCountDown] = React.useState(0);
  const [runTimer, setRunTimer] = React.useState(true);
  const navigate = useNavigate();

  React.useEffect(() => {
    let timerId;

    if (runTimer) {
      setCountDown(60 * 45);
      timerId = setInterval(() => {
        setCountDown((countDown) => countDown - 1);
      }, 1000);
    } else {
      clearInterval(timerId);
    }

    return () => clearInterval(timerId);
  }, [runTimer]);

  React.useEffect(() => {
    if (countDown < 0 && runTimer) {
      console.log('expired');
      setRunTimer(false);
      setCountDown(0);
      submitTest();
    }
  }, [countDown, runTimer]);

  const seconds = String(countDown % 60).padStart(2, 0);
  const minutes = String(Math.floor(countDown / 60)).padStart(2, 0);

  const submitTest = () => {
    navigate('/submit-test');
  };
  return (
    <div className={'timer-container'}>
      Time: <span className={'minutes'}>{minutes}</span>&nbsp;:&nbsp;
      <span className={'seconds'}>{seconds}</span>
    </div>
  );
};

export default Timer;
