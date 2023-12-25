import { Button, Dialog, DialogActions, DialogContent, DialogContentText } from '@mui/material';

const ConfirmationModal = ({ message, open, buttonName, onClose, onSubmit }) => {
  return (
    <Dialog open={open} onClose={onClose} id='confirmationDialog'>
      <DialogContent>
        <DialogContentText id='confirmationText'>{message}</DialogContentText>
      </DialogContent>
      <DialogActions id='confirmationActions'>
        <Button variant='outlined' onClick={onClose} id='noButton'>
          No
        </Button>
        <Button variant='outlined' onClick={onSubmit} id='submitButton'>
          {buttonName ? buttonName : 'Yes'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationModal;
