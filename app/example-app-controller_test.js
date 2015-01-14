describe("ExampleCtrl", function(){
  beforeEach(module('exampleApp'));

  var $controller;

  beforeEach(inject(function (_$controller_) {
    $controller = _$controller_;
  }));

  it("sets aList property correctly", function() {
    var _this = $controller('ExampleCtrl');

    expect(_this.aList).toEqual([1, 2, 3]);
  });

  it("clear list sets aList to empty list", function() {
    var _this = $controller('ExampleCtrl');

    expect(_this.aList).toEqual([1, 2, 3]);

    _this.clearList();
    expect(_this.aList).toEqual([]);
  });
});
