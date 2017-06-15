const { checkTriangle } = require('./triangle');

const triangles = [
  [345, 100, 345],
  [781, 781, 781],
  [360, 175, 500]
];

triangles.forEach((sides) => {
  let strSides = sides.join(', ');
  let result = checkTriangle(sides);

  console.log(`[${strSides}]: this is ${result}`);
});
