import { Security } from '../../blocks/security/security';
import { View } from '../view';
import template from './security-form.pug';
import { User } from '../../models/user';

export class SecurityForm extends View {
  get bemName () {
    return 'security-form';
  }

  template (data) {
    return template(data);
  }

  constructor () {
    super();
    this.security = new Security();
    this.model = new User();
  }

  onSubmit (form) {
    let inputs = form.querySelectorAll('.textbox__input_required');
    for (let input of inputs) {
      let element = input.firstElementChild;
      if (element.value === '') {
        element.classList.toggle('textbox__input_error', true);
      } else {
        element.classList.toggle('textbox__input_error', false);
      }
    }
    this.model.changePassword(form);
  }

  render (el) {
    super.render(el);
    this.security.render(this.getElement('form'));
    this.security.onSubmit = this.onSubmit.bind(this);
  }
}
