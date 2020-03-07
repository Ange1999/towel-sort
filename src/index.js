
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length === 0) { return []; }
  let array = [];
  matrix.forEach((item, index) => {
    let rev = item;
    if (index % 2 !== 0) {
      rev = item.reverse();
    }
    array = array.concat(rev);
  });
  return array;
}
