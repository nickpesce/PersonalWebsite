import { PersonalWebsitePage } from './app.po';

describe('personal-website App', () => {
  let page: PersonalWebsitePage;

  beforeEach(() => {
    page = new PersonalWebsitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
