import { createElement } from '../../utils/dom';
import { createHeader, initHeaderInteractions } from '../../components/header/header';

export function createHomePage(): HTMLElement {
  const header = createHeader();

  const page = createElement('div', { className: 'page page--home' }, [
    header,
    createElement('main', { className: 'home' }, [createElement('h1', { text: 'MiniGames' })]),
  ]);

  queueMicrotask(() => initHeaderInteractions(page));

  return page;
}
