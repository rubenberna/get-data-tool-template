import { useSnackbar } from 'notistack';

export const useNotification = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const addNotification = (message, type = 'default') => {
    enqueueSnackbar(message, {
      variant: type,
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right',
      }
    });
  };

  return {
    closeNotification: closeSnackbar,
    addNotification
  }
}
