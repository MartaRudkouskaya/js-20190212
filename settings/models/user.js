import { Model } from '../../libs/model';

export class User extends Model {
  /**
   * Изменение пароля
   * @param {Object} form
   */
  changePassword (form) {
    const newPassword = form.querySelector('#new-password').value;
    const newPasswordRepeat = form.querySelector('#new-password-repeat').value
    if (newPassword !== newPasswordRepeat || newPassword === '' || newPasswordRepeat === '') {
      return Promise.reject(new Error('Пароли не совпадают'));
    }
    return this.request('POST', 'settings', form);
  }
}
