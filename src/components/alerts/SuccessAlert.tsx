import { SweetAlertOptions } from 'sweetalert2';
import SwalAlert from './SwalAlert';

const SuccessAlert = (options: SweetAlertOptions<any, any>) => {
  SwalAlert.fire({
    ...options,
    icon: 'success',
  });
};

export default SuccessAlert;
