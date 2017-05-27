const sum   = require('../src/sum'),
      chai  = require('chai'),
      cap   = require('chai-as-promised');

chai.use(cap);
chai.should();

describe('simple unit test harness', () => {
  it('sum returns the total of provided 2 numbers', () => {
    return sum(1, 2).should.eventually.equal(3);
  });
});
