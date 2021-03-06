import { Block } from '../../blocks/block';

export class View extends Block {
  render (el) {
    super.render(el);
    this.el.hidden = true;
  }
  toggle (state) {
    this.el.hidden = !state;
  }
  debounce (func, wait = 20, immediate = true) {
    let timeout;

    return function () {
      const context = this;
      const args = arguments;

      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };

      const callNow = immediate && !timeout;

      clearTimeout(timeout);

      timeout = setTimeout(later, wait);

      if (callNow) func.apply(context, args);
    };
  }
}
