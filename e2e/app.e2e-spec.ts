import { AngularShowcasePage } from './app.po';

describe('angular-showcase App', () => {
  let page: AngularShowcasePage;

  beforeEach(() => {
    page = new AngularShowcasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
