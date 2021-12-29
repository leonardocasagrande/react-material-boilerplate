import { SweetAlertOptions } from 'sweetalert2';
import SwalAlert from './SwalAlert';

const ErrorAlert = (options: SweetAlertOptions<any, any>) => {
  SwalAlert.fire({
    ...options,
    icon: 'error',
  });
};

export default ErrorAlert;
