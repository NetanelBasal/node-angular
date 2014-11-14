(function() {
  'use strict'

  describe('anguLaravel homepage', function() {
    it('should have a title', function() {
      browser.get('http://localhost/anguLaravel%20boilerplate/public/#/');

      expect(browser.getTitle()).toEqual('anguLaravel');
    });

    it('should showing the element on click', function() {
      element(by.buttonText('toggle')).click();

      expect(element(by.css('.net-fade')).getText()).
        toEqual('daddddddddd');
    })
  });

})();

