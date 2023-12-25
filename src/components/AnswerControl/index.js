import { FormControl, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { ANSWER_TYPES } from '../../utils/constants';

const AnswerControl = ({ questionData, onChange }) => {
  const getFormControl = () => {
    switch (questionData.answerType) {
      case ANSWER_TYPES.TEXT:
        return (
          <div>
            <TextField
              id='TextField'
              placeholder='Please type your answer here'
              className={'answer-control'}
              name=''
              type='text'
              value={questionData.answer}
              onChange={(event) => onChange(event.target.value)}
            />
          </div>
        );
      case ANSWER_TYPES.RADIO:
        return (
          <FormControl>
            <RadioGroup
              aria-labelledby='demo-controlled-radio-buttons-group'
              name='controlled-radio-buttons-group'
              value={questionData.answer}
              onChange={(event) => onChange(event.target.value)}
            >
              {questionData.optionsList.map((optionListItem) => {
                return (
                  <FormControlLabel
                    key={`option_${optionListItem}`}
                    value={optionListItem}
                    control={<Radio />}
                    label={optionListItem}
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
        );
      default:
        return null;
    }
  };
  return (
    <div>
      <div className={'question'}>Q.&nbsp;{questionData.question}</div>
      {getFormControl()}
    </div>
  );
};

export default AnswerControl;
