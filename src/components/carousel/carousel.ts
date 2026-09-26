import { createElement } from '../../utils/dom';

interface GameCard {
  title: string;
  image: string;
  rating: string;
  likes: string;
  size: 'small' | 'medium' | 'large';
}

const GAMES: GameCard[] = [
  { title: 'Cozy Cafe', image: 'cozy-cafe.jpg', rating: '', likes: '', size: 'small' },
  {
    title: 'ISLANDERS: New Shores',
    image: 'islanders.jpg',
    rating: '4.9',
    likes: '54.2K',
    size: 'medium',
  },
  {
    title: 'Vacation Cafe Simulator',
    image: 'vacation-cafe.jpg',
    rating: '4.8',
    likes: '28.7K',
    size: 'large',
  },
  {
    title: 'Winter Burrow',
    image: 'winter-burrow.jpg',
    rating: '4.9',
    likes: '32.4K',
    size: 'medium',
  },
  {
    title: 'Shelve the Potions',
    image: 'shelve-potions.jpg',
    rating: '',
    likes: '',
    size: 'small',
  },
];

function createCard(game: GameCard): HTMLElement {
  const children: HTMLElement[] = [
    createElement('div', {
      className: 'carousel__image',
      attributes: { style: `background-image: url('/src/assets/images/${game.image}')` },
    }),
  ];

  if (game.rating || game.likes) {
    children.push(
      createElement('div', { className: 'carousel__overlay' }, [
        createElement('h3', { className: 'carousel__title', text: game.title }),
        createElement('div', { className: 'carousel__meta' }, [
          createElement('span', { className: 'carousel__rating', text: `\u2605 ${game.rating}` }),
          createElement('span', { className: 'carousel__likes', text: `\u2665 ${game.likes}` }),
        ]),
      ]),
    );
  }

  return createElement(
    'li',
    { className: `carousel__card carousel__card--${game.size}` },
    children,
  );
}

export function createCarousel(): HTMLElement {
  const cards = GAMES.map(createCard);

  return createElement('section', { className: 'carousel' }, [
    createElement('div', { className: 'carousel__header' }, [
      createElement('div', { className: 'carousel__accent' }),
      createElement('h2', { className: 'carousel__section-title', text: 'New Games' }),
      createElement('div', { className: 'carousel__controls' }, [
        createElement('button', {
          className: 'carousel__arrow carousel__arrow--prev',
          text: '\u2190',
          attributes: { type: 'button', 'aria-label': 'Previous games' },
        }),
        createElement('button', {
          className: 'carousel__arrow carousel__arrow--next',
          text: '\u2192',
          attributes: { type: 'button', 'aria-label': 'Next games' },
        }),
      ]),
    ]),
    createElement('ul', { className: 'carousel__track' }, cards),
  ]);
}
