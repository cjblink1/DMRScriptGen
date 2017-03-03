import { DMRScriptGenPage } from './app.po';

describe('dmrscript-gen App', () => {
  let page: DMRScriptGenPage;

  beforeEach(() => {
    page = new DMRScriptGenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
