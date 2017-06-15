const _ = require('lodash');

const TYPES = {
  1: 'equilateral',
  2: 'isosceles',
  3: 'scalene'
};

/**
 * Check that every side of triangle is less than sum of 2 other sides.
 * @param  {Array} sides
 * @return {Boolean}
 */
function isTriangle (sides) {
  if (!_.every(sides, _.isNumber) || _.size(sides) != 3) {
    return false;
  }

  return _.chain(sides)
    .map((side, index) => side < _.chain(sides)
      .reject((s, i) => i == index)
      .sum()
      .value()
    )
    .every()
    .value();
};

/**
 * Return type of triangle if it valid.
 * param {Array} sides
 * return {String}
 */
function checkTriangle (sides) {
  if (!isTriangle(sides)) {
    return 'not valid';
  }

  let differentSides = _.uniq(sides).length;
  return TYPES[differentSides];
}

module.exports = {
 isTriangle,
 checkTriangle
};