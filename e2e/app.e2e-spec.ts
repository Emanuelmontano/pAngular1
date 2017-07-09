import { PAngular1Page } from './app.po';

describe('p-angular1 App', () => {
  let page: PAngular1Page;

  beforeEach(() => {
    page = new PAngular1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
