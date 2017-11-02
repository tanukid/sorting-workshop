function mergeSort(array) {
  if (array.length === 0) return [];
  if (array.length === 1) return array;
  const [left, right] = split(array)
  return merge(mergeSort(left), mergeSort(right))
}
``
function split(arr) {
  return [arr.slice(0, arr.length / 2), arr.slice(arr.length /2, arr.length)]
}

function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) result.push(left.shift())
    else result.push(right.shift())
  }
  return result.concat(left, right);;
}
``
