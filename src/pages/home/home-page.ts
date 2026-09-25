import { createElement } from '../../utils/dom';

export function createHomePage(): HTMLElement {
  return createElement('main', { className: 'home' }, [createElement('h1', { text: 'MiniGames' })]);
}
