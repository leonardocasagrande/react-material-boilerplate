import { SweetAlertOptions } from 'sweetalert2';
import SwalAlert from './SwalAlert';

const WarningAlert = (options: SweetAlertOptions<any, any>) => {
  SwalAlert.fire({
    ...options,
    icon: 'warning',
  });
};

export default WarningAlert;
