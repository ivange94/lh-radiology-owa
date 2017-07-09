import { LhRadiologyOwaPage } from './app.po';

describe('lh-radiology-owa App', () => {
  let page: LhRadiologyOwaPage;

  beforeEach(() => {
    page = new LhRadiologyOwaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
