import React from 'react';
import { Snackbar, Alert } from '@mui/material';

interface SnackbarAlertProps {
  open: boolean;
  message: string;
  onClose: () => void;
  severity?: 'success' | 'info' | 'warning' | 'error'; // Para personalizar el tipo de alerta
}

const SnackbarAlert: React.FC<SnackbarAlertProps> = ({ open, message, onClose, severity = 'error' }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
    >
      <Alert onClose={onClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarAlert;
