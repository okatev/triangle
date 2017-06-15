const Lab = require('lab');
const lab = exports.lab = Lab.script();
const { checkTriangle, isTriangle } = require('./triangle');

lab.experiment('Check that triangle is valid:', () => {
  lab.test('Return false when one of sides if not a number', (done) => {
    const result = isTriangle([123, 123, '123']);

    Lab.expect(result).to.be.false();
    done();
  });

  lab.test('Return false when one of sides if more than sum of other two', (done) => {
    const result = isTriangle([123, 123, 300]);

    Lab.expect(result).to.be.false();
    done();
  });

  lab.test('Return false when sides is not array', (done) => {
    const result = isTriangle(null);

    Lab.expect(result).to.be.false();
    done();
  });
});

lab.experiment('Show type of valid triangle:', () => {
  lab.test('Return Equilateral when every side is equal', (done) => {
    const result = checkTriangle([123, 123, 123]);

    Lab.expect(result).to.equal('equilateral');
    done();
  });

  lab.test('Return Isosceles when two sides is equal', (done) => {
    const result = checkTriangle([123, 233, 123]);

    Lab.expect(result).to.equal('isosceles');
    done();
  });

  lab.test('Return Scalene when every side is different', (done) => {
    const result = checkTriangle([20, 25, 30]);

    Lab.expect(result).to.equal('scalene');
    done();
  });

  lab.test('Return Not valid when it is not triangle', (done) => {
    const result = checkTriangle(null);

    Lab.expect(result).to.equal('not valid');
    done();
  });
});