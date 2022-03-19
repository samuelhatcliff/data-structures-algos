function binarySearch(arr, val) {

    let leftIdx = 0;
    let rightIdx = arr.length - 1;
  
    while (leftIdx <= rightIdx) {
      // find the middle value
      let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
      let middleVal = arr[middleIdx];
  
      if (middleVal < val) {
        // middleVal is too small, look at the right half
        leftIdx = middleIdx + 1;
      } else if (middleVal > val) {
        // middleVal is too large, look at the left half
        rightIdx = middleIdx - 1;
      } else {
        // we found our value!
        return middleIdx;
      }
    }
    
    // left and right pointers crossed, val isn't in arr
    return -1;
  }


  function countZeroes(arr) {

    let leftIdx = 0;
    let rightIdx = arr.length - 1;
  
    while (leftIdx <= rightIdx) {
      let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
      let middleVal = arr[middleIdx];
  
      if (middleVal === 1) {
          let nextIdx = middleIdx + 1
          if (arr[nextIdx] === 0) {
            const count = arr.length - nextIdx
            return count
          }

        leftIdx = middleIdx + 1;
      } else if (middleVal === 0) {
        let preIdx = middleIdx - 1
        if (arr[preIdx] === 1) {
          leftIdx = preIdx;
          const count = arr.length - middleIdx
          return count
        }

        rightIdx = middleIdx - 1;
      } 
    }
    return "There are no zeroes in this array!";
  }

function sortedFreq(arr, val) {
    let firstIdx = findFirst(arr, val);
    let lastIdx = findLast(arr, val);
    return lastIdx - firstIdx + 1;
}

function findFirst(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];
       
        if (val > arr[middleIdx -1] && val === arr[middleIdx]) {
        return middleIdx;
        }
        else if (val > middleVal) {
            leftIdx = middleIdx + 1;
        }
        else  {
            rightIdx = middleIdx -1;
        }
    }
}

function findLast(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];
       
        if (middleIdx === arr.length - 1 || val < arr[middleIdx +1] && val === arr[middleIdx]) {
        return middleIdx;
        }
        else if (val < middleVal) {
            rightIdx = middleIdx - 1;
        }
        else  {
            leftIdx = middleIdx + 1;
        }
    }
}


// console.log(sortedFreq([1,1,2,2,2,2,3],2))

function findFloor(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let floor;
    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if (val > middleVal) {
            if (val < arr[middleIdx + 1]) {
                floor = middleVal
                return floor
            }
            else {
                leftIdx = middleIdx +1
            }
        }

        else if (val < middleVal) {
            if (val < arr[middleIdx + 1] ) {
                rightIdx = middleIdx
            }
        }
        else {
            floor = middleVal;
            return floor;
        }
    }

    return -1

}

// console.log(findFloor([1,2,8,10,10,12,19], 7))


function findPivot(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    while (leftIdx <= rightIdx) {
      let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
      if (arr[middleIdx] > arr[middleIdx + 1]) return middleIdx + 1
      else if (arr[middleIdx] >= arr[leftIdx] ) {
        leftIdx = middleIdx + 1
      } else {
        rightIdx = middleIdx - 1
      }
    }
  }
// console.log(findPivot([37,44,66,102,10,22]))

function findRotatedIndex (arr, val) {
    const pivotIdx = findPivot(arr);
    let leftIdx = 0;
    let leftVal = arr[leftIdx]
    let newArr1 = arr.slice(0, pivotIdx);
    let newArr2 = arr.slice(pivotIdx, arr.length);
    
    if (val >= leftVal) {
        let newArrIdx = binarySearch(newArr1, val);
        return newArrIdx
    }
    else {
        let newArrIdx = findFirst(newArr2, val);
        let count = newArr1.length + newArrIdx;
        return count
    }
}