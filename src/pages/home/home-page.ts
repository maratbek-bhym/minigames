import { createElement } from '../../utils/dom';
import { createHeader, initHeaderInteractions } from '../../components/header/header';
import { createHero } from '../../components/hero/hero';
import { createCarousel } from '../../components/carousel/carousel';
import { createLeaderboard } from '../../components/leaderboard/leaderboard';
import { createGameDevCta } from '../../components/game-dev-cta/game-dev-cta';

export function createHomePage(): HTMLElement {
  const header = createHeader();

  const page = createElement('div', { className: 'page page--home' }, [
    header,
    createElement('main', { className: 'home' }, [
      createHero(),
      createCarousel(),
      createLeaderboard(),
      createGameDevCta(),
    ]),
  ]);

  queueMicrotask(() => initHeaderInteractions(page));

  return page;
}
