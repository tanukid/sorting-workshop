describe('Bubble Sort', () => {

  let unsorted;
  const sorted = [2, 3, 5, 17, 20, 48, 92];

  beforeEach(() => {
    unsorted = [20, 3, 48, 92, 2, 17, 5]
  });

  it('handles an empty array',  () => {
    expect(bubbleSort([])).toEqual([]);
  });

  it('sorts an unsorted array',  () => {
    expect(bubbleSort(unsorted)).toEqual(sorted);
  })

  it('calls isLess correct number of times', () => {
    spyOn(window, 'isLess').and.callThrough();
    bubbleSort(unsorted);
    expect(isLess.calls.count()).toEqual(20);
  })

  it('calls swap correct amount of times', () => {
    spyOn(window, 'swap').and.callThrough();
    bubbleSort(unsorted);
    expect(swap.calls.count()).toEqual(12);
  })
});
