import '../styles/globals.scss';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import { createElement } from '../utils/dom';
import { createHomePage } from '../pages/home/home-page';
import { createNotFoundPage } from '../pages/not-found/not-found-page';
import { Router } from './router';

const root = createElement('div', {
  attributes: {
    id: 'app',
  },
});

document.body.append(root);

const router = new Router(root, [{ path: '/', render: createHomePage }], createNotFoundPage);

router.start();
