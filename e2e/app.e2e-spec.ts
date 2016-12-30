import { PodcastBPage } from './app.po';

describe('podcast-b App', function() {
  let page: PodcastBPage;

  beforeEach(() => {
    page = new PodcastBPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
