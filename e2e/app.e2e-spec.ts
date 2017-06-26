import { WebServerAngular2Page } from './app.po';

describe('web-server-angular2 App', () => {
  let page: WebServerAngular2Page;

  beforeEach(() => {
    page = new WebServerAngular2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
