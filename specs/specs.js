var homePage = require('./../pageobjects/angularHomePage.js');
describe('angularjs homepage', function() {
  it('should greet the named user', function() {
    var angularHomepage = new homePage();
    angularHomepage.get();
    angularHomepage.setName('Nikola');
    expect(angularHomepage.getGreeting()).toEqual('Hello Nikola!');
  });
});