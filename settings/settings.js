import { Button } from './blocks/button/button';
import { PersonalData } from './blocks/personalData/personalData';
import { Security } from './blocks/security/security';
import { SettingsForm } from './blocks/settingsform/settingsform';
import { Textareabox } from './blocks/textareabox/textareabox';
import { Textbox } from './blocks/textbox/textbox';
import { SettingsMenu } from './blocks/settingsmenu/settingsmenu'
import { Datebox } from './blocks/datebox/datebox'
import { Galarey } from './blocks/galarey/galarey';
import { Themes } from './blocks/themes/themes'
import { Router } from './../libs/router';
import { SecurityForm } from './views/security-form/security-form';
import { PersonalDataForm } from './views/personal-data-form/personal-data-form';
import { Menu } from './views/menu/menu';
import { ThemeForm } from './views/theme-form/theme-form';

/* eslint-disable */
import _ from './settings.scss';
/* eslint-enable */

window.Button = Button;
window.PersonalData = PersonalData;
window.Security = Security;
window.SettingsForm = SettingsForm;
window.Textareabox = Textareabox;
window.Textbox = Textbox;
window.SettingsMenu = SettingsMenu;
window.Datebox = Datebox;
window.Galarey = Galarey;
window.Themes = Themes;

window.addEventListener('DOMContentLoaded', () => {
  const securityFrom = new SecurityForm();
  const personalDataForm = new PersonalDataForm();
  const themeForm = new ThemeForm();
  const menu = new Menu();
  const router = new Router();

  menu.render(document.querySelector('.menu'), false);
  securityFrom.render(document.querySelector('.security'));
  personalDataForm.render(document.querySelector('.personal-info'));
  themeForm.render(document.querySelector('.themes'));
  router.register('persondata', personalDataForm, true);
  router.register('security', securityFrom);
  router.register('theme', themeForm);
  router.register('')
  router.start();
});
