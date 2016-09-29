import { ProjDemoPage } from './app.po';

describe('proj-demo App', function() {
  let page: ProjDemoPage;

  beforeEach(() => {
    page = new ProjDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
