import { createElement } from '../../utils/dom';

export function createHero(): HTMLElement {
  return createElement('section', { className: 'hero' }, [
    createElement('div', { className: 'hero__box' }, [
      createElement('h1', {
        className: 'hero__title',
        text: 'Take a Short Break & Have Fun',
      }),
      createElement('p', {
        className: 'hero__description',
        text: 'Discover hundreds of curated casual mini-games. Play instantly in your browser — puzzle, match 3, farm, and board classics.',
      }),
      createElement(
        'a',
        { className: 'hero__button', attributes: { href: '/library', 'data-link': '' } },
        ['Browse Library'],
      ),
    ]),
  ]);
}
