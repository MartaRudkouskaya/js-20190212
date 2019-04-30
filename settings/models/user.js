import { Model } from '../../libs/model';

export class User extends Model {
  /**
   * Изменение пароля
   * @param {Object} form
   */
  changePassword (form) {
    let newRequest = {};
    const newPassword = form.querySelector('#new-password').value;
    const newPasswordRepeat = form.querySelector('#new-password-repeat').value
    if (newPassword !== newPasswordRepeat || newPassword === '' || newPasswordRepeat === '') {
      return Promise.reject(new Error('Пароли не совпадают'));
    } else {
      newRequest['password'] = newPassword;
    }

    console.log(JSON.stringify(newRequest));
    return this.request('POST', 'settings', JSON.stringify(newRequest));
  }
}
