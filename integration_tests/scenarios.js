/* global browser, element, by */

'use strict';

describe('example test app', function() {

  beforeEach(function() {
    browser.get('/');
  });

  describe('clear the list button', function() {
    it('should work', function() {
      var li_elms = element.all(by.css('li'));

      expect(li_elms.count()).toBe(3);

      element(by.buttonText('Clear the list!')).click();
      expect(li_elms.count()).toBe(0);
    });
  });
});
