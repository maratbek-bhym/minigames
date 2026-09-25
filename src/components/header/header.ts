import { createElement } from '../../utils/dom';

const NAV_LINKS = [
  { label: 'Home', href: '/', active: true },
  { label: 'Library', href: '/library', active: false },
  { label: 'Tournaments', href: '/tournaments', active: false },
  { label: 'Community', href: '/community', active: false },
];

function createLogo(className = 'header__logo'): HTMLElement {
  return createElement('a', { className, attributes: { href: '/', 'data-link': '' } }, [
    createElement('span', { className: 'header__logo-icon' }),
    createElement('span', { className: 'header__logo-text', text: 'MiniGames' }),
  ]);
}

function createNav(): HTMLElement {
  const links = NAV_LINKS.map((link) =>
    createElement('li', { className: 'header__nav-item' }, [
      createElement('a', {
        className: `header__nav-link${link.active ? ' header__nav-link--active' : ''}`,
        text: link.label,
        attributes: { href: link.href, 'data-link': '' },
      }),
    ]),
  );

  return createElement('nav', { className: 'header__nav' }, [
    createElement('ul', { className: 'header__nav-list' }, links),
  ]);
}

function createAuthButtons(className = 'header__auth-buttons'): HTMLElement {
  const loginButton = createElement('button', {
    className: 'header__button header__button--outline',
    text: 'Log In',
    attributes: { type: 'button', 'data-action': 'open-auth-login' },
  });

  const signUpButton = createElement('button', {
    className: 'header__button header__button--filled',
    text: 'Sign Up',
    attributes: { type: 'button', 'data-action': 'open-auth-register' },
  });

  return createElement('div', { className }, [loginButton, signUpButton]);
}

function createBurgerButton(): HTMLElement {
  return createElement(
    'button',
    {
      className: 'header__burger',
      attributes: {
        type: 'button',
        'aria-label': 'Open menu',
        'aria-expanded': 'false',
        'aria-controls': 'mobile-nav',
      },
    },
    [
      createElement('span', { className: 'header__burger-line' }),
      createElement('span', { className: 'header__burger-line' }),
      createElement('span', { className: 'header__burger-line' }),
    ],
  );
}

function createMobileNav(): HTMLElement {
  const links = NAV_LINKS.map((link) =>
    createElement('a', {
      className: `mobile-nav__link${link.active ? ' mobile-nav__link--active' : ''}`,
      text: link.label,
      attributes: { href: link.href, 'data-link': '' },
    }),
  );

  const closeButton = createElement(
    'button',
    {
      className: 'mobile-nav__close',
      attributes: { type: 'button', 'aria-label': 'Close menu' },
    },
    ['\u2715'],
  );

  return createElement(
    'div',
    { className: 'mobile-nav', attributes: { id: 'mobile-nav', 'aria-hidden': 'true' } },
    [
      createElement('div', { className: 'mobile-nav__backdrop' }),
      createElement('aside', { className: 'mobile-nav__panel' }, [
        createElement('div', { className: 'mobile-nav__top' }, [
          createLogo('mobile-nav__logo'),
          closeButton,
        ]),
        createElement('nav', { className: 'mobile-nav__links' }, links),
        createAuthButtons('mobile-nav__auth-buttons'),
      ]),
    ],
  );
}

export function createHeader(): HTMLElement {
  const navActions = createElement('div', { className: 'header__nav-actions' }, [
    createNav(),
    createAuthButtons(),
  ]);

  return createElement('div', { className: 'header-wrapper' }, [
    createElement('header', { className: 'header' }, [
      createLogo(),
      navActions,
      createBurgerButton(),
    ]),
    createMobileNav(),
  ]);
}

export function initHeaderInteractions(root: HTMLElement): void {
  const burger = root.querySelector<HTMLButtonElement>('.header__burger');
  const mobileNav = root.querySelector<HTMLElement>('.mobile-nav');
  const closeButton = root.querySelector<HTMLButtonElement>('.mobile-nav__close');
  const backdrop = root.querySelector<HTMLElement>('.mobile-nav__backdrop');

  if (!burger || !mobileNav || !closeButton || !backdrop) {
    return;
  }

  function openMenu(): void {
    mobileNav!.classList.add('mobile-nav--open');
    mobileNav!.setAttribute('aria-hidden', 'false');
    burger!.setAttribute('aria-expanded', 'true');
    document.body.classList.add('no-scroll');
  }

  function closeMenu(): void {
    mobileNav!.classList.remove('mobile-nav--open');
    mobileNav!.setAttribute('aria-hidden', 'true');
    burger!.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('no-scroll');
  }

  burger.addEventListener('click', openMenu);
  closeButton.addEventListener('click', closeMenu);
  backdrop.addEventListener('click', closeMenu);

  mobileNav.querySelectorAll('a[data-link]').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  // Кнопки Log In / Sign Up внутри мобильного меню тоже закрывают его
  // (открытие auth-диалога добавится в ветке auth-dialog-trigger)
  mobileNav.querySelectorAll('[data-action]').forEach((button) => {
    button.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobileNav!.classList.contains('mobile-nav--open')) {
      closeMenu();
    }
  });
}
