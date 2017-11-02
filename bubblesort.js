
function swap(arr, left, right, cb) {
  let t = arr[left];
  arr[left] = arr[right];
  arr[right] = t;
  cb();
}

function isLess(left, right) {
  return left > right;
}

function bubbleSort(array) {
  if (array.length === 0) return [];
  let m = array.length;
  let swapped = true;
  while (m && swapped) {
    for (let i = 0; i < m - 1; i++) {
      swapped = false;
      if (isLess(array[i], array[i + 1])) {
        swap(array, i, i + 1, () => {
          swapped = true;
        });
      }
    }
    m--;
  }
  return array;
}
