describe('Merge sort', function () {
  let unsortedEven,
    unsortedOdd;

  beforeEach(() => {
    unsortedEven = [20, 93, 45, 70, 22, 1];
    unsortedOdd = [50, 23, 80, 52, 12, 44, 92];
  });

  it('works with an empty array', () => {
    expect(mergeSort([])).toEqual([]);
  })

  it('is able to split an array into two halves', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const [firstHalf, secondHalf] = split(arr);
    expect(firstHalf).toEqual([1, 2, 3, 4, 5]);
    expect(secondHalf).toEqual([6, 7, 8, 9, 10]);
  })

  it('is able to merge two sorted arrays into one sorted array', () => {
    expect(merge([1, 50, 90], [4, 20, 100])).toEqual([1, 4, 20, 50, 90, 100]);
  });

  it('is able to sort an even length array', () => {
    expect(mergeSort(unsortedEven)).toEqual([1, 20, 22, 45, 70, 93])
  })

  it('is able to sort an odd length array', () => {
    expect(mergeSort(unsortedOdd)).toEqual([12, 23, 44, 50, 52, 80, 92])
  })
});


