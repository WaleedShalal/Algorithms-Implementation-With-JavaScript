const CL = console.log.bind(this);
/* ------------------------------ Linear Search ----------------------------- */
const linearSearch = (arr, target) => {
  for (const index in arr) {
    if (arr[index] === target) return +index;
  }
  return -1;
};
CL(linearSearch([1, 3, 6, 9, 2, 5, 7, 20, 30, 50], 7));
/* ------------------------------ Binary Search ----------------------------- */
const binarySearch = (arr, target) => {
  let startIndex = 0;
  let endIndex = arr.length - 1;
  while (startIndex <= endIndex) {
    const middleIndex = Math.trunc((startIndex + endIndex) / 2);
    if (arr[middleIndex] === target) {
      return middleIndex;
    } else if (arr[middleIndex] < target) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }
  return -1;
};
CL(binarySearch([2, 4, 6, 8, 10, 12, 18], 6));
/* ----------------------------- Selection Sort ----------------------------- */
const selectionSort = (arr) => {
  const arrCopy = [...arr];
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    let minNumIndex = i;
    for (let j = i + 1; j < arrLength; j++) {
      if (arrCopy[j] < arrCopy[minNumIndex]) {
        minNumIndex = j;
      }
    }
    if (minNumIndex !== i) {
      [arrCopy[i], arrCopy[minNumIndex]] = [arrCopy[minNumIndex], arrCopy[i]];
    }
  }
  return [...arrCopy];
};
CL(selectionSort([2, 4, 7, 8, 9, 1, 5, 10, 23, 60, 11, 21, 56, 76, 89, 90, 0]));
/* ------------------------------- Bubble Sort ------------------------------ */
const bubbleSort = (arr) => {
  const arrCopy = [...arr];
  const arrLength = arr.length - 1;
  let isSwapped = false;
  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength - i; j++) {
      if (arrCopy[j + 1] < arrCopy[j]) {
        [arrCopy[j], arrCopy[j + 1]] = [arrCopy[j + 1], arrCopy[j]];
        isSwapped = true;
      }
    }
    if (!isSwapped) return [...arrCopy];
  }
  return [...arrCopy];
};
CL(bubbleSort([2, 4, 7, 8, 9, 1, 5, 10, 23, 60, 11, 21, 56, 76, 89, 90, 0]));
