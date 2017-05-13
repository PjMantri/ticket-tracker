import { TicketTrackerPage } from './app.po';

describe('ticket-tracker App', () => {
  let page: TicketTrackerPage;

  beforeEach(() => {
    page = new TicketTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
