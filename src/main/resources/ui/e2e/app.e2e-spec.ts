import { StoreUiPage } from './app.po';

describe('store-ui App', () => {
  let page: StoreUiPage;

  beforeEach(() => {
    page = new StoreUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
