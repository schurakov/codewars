const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

/*
()
[]
{}
(){}[]
([{}])
(}
[(])
({})[({})]
(})
*/

describe("Example", function() {
  it("should test", function() {
    assert.strictEqual(validBraces( "()" ), true);
    assert.strictEqual(validBraces( "(})" ), false);
  });
});
