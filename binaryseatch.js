function binarySearch(arr, value, i, j) {
    let mid = i + Math.floor((j - i) / 2);
    console.log(mid);
    if (arr[mid] == value) {
      return mid;
    } else if (arr[mid] < value) {
      return binarySearch(arr, value, mid + 1, j);
    } else if (arr[mid] > value) {
      return binarySearch(arr, value, i, mid - 1); 
    }
  }
  
  let arr = [2, 3, 4, 5, 6, 7, 8, 2, 3, 4];
  let value = 4;
  let i = 0;
  let j = arr.length - 1;
  let result = binarySearch(arr, value, i, j);
  console.log(result);
  
  