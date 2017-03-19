import { Ng2GithubPagePage } from './app.po';

describe('ng2-github-page App', function() {
  let page: Ng2GithubPagePage;

  beforeEach(() => {
    page = new Ng2GithubPagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
