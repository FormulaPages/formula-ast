var assert = require("assert");
describe('formulaParser', function() {
  describe('#constructor()', function () {
    it('it should be there when you require it', function () {
      var p = require('formula-ast');
      assert( typeof p !== undefined, "not there for me");
    });
  });
});
