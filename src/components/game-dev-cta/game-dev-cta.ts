import { createElement } from '../../utils/dom';

export function createGameDevCta(): HTMLElement {
  return createElement('section', { className: 'game-dev-cta' }, [
    createElement('div', {
      className: 'game-dev-cta__illustration',
      attributes: { role: 'img', 'aria-label': 'Illustration of a game developer workspace' },
    }),
    createElement('div', { className: 'game-dev-cta__card' }, [
      createElement('h2', { className: 'game-dev-cta__title', text: 'Are You a Game Developer?' }),
      createElement('p', {
        className: 'game-dev-cta__text',
        text: "Want to see your game on MiniGames? We're always looking for fun, engaging mini games to add to our platform. Submit your game and reach thousands of players!",
      }),
      createElement(
        'button',
        { className: 'game-dev-cta__button', attributes: { type: 'button' } },
        [
          createElement(
            'span',
            { className: 'game-dev-cta__button-icon', attributes: { 'aria-hidden': 'true' } },
            ['\u2191'],
          ),
          'Submit Form',
        ],
      ),
      createElement('p', {
        className: 'game-dev-cta__contact',
        text: 'or contact us at developers@minigames.com',
      }),
    ]),
  ]);
}
