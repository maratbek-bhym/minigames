export type PageRenderer = () => HTMLElement;

export interface Route {
  path: string;
  render: PageRenderer;
}

export class Router {
  private readonly outlet: HTMLElement;
  private readonly routes: Route[];
  private readonly notFound: PageRenderer;

  constructor(outlet: HTMLElement, routes: Route[], notFound: PageRenderer) {
    this.outlet = outlet;
    this.routes = routes;
    this.notFound = notFound;
  }

  public start(): void {
    window.addEventListener('popstate', () => this.render());
    document.addEventListener('click', (event) => this.handleLinkClick(event));
    this.render();
  }

  public navigate(path: string): void {
    window.history.pushState({}, '', path);
    this.render();
  }

  private handleLinkClick(event: MouseEvent): void {
    const target = event.target;

    if (!(target instanceof Element)) {
      return;
    }

    const link = target.closest<HTMLAnchorElement>('a[data-link]');

    if (!link) {
      return;
    }

    event.preventDefault();
    this.navigate(link.getAttribute('href') ?? '/');
  }

  private render(): void {
    const route = this.routes.find((item) => item.path === window.location.pathname);
    const page = route ? route.render() : this.notFound();

    this.outlet.replaceChildren(page);
    window.scrollTo(0, 0);
  }
}
