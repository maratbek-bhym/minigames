import { createElement } from '../../utils/dom';

export function createNotFoundPage(): HTMLElement {
  return createElement('main', { className: 'not-found' }, [
    createElement('h1', { text: 'Page not found' }),
    createElement(
      'a',
      {
        attributes: {
          href: '/',
          'data-link': '',
        },
      },
      ['Back to home'],
    ),
  ]);
}
