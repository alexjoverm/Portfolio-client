import { PortfolioClientPage } from './app.po';

describe('portfolio-client App', function() {
  let page: PortfolioClientPage;

  beforeEach(() => {
    page = new PortfolioClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
