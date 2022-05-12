/** product: calculate the product of an array of numbers. */
function product(nums) {
  if (0 === nums.length) return 1;
  return nums[0] * product(nums.slice(1));
}
console.log(product([2, 3, 4]))

/** longest: return the length of the longest word in an array of words. */

function findLongest(words, i = 0, longest) {
  if (i > words.length - 1) {
    return longest;
  }
  if (i === 0) {
    longest = words[0]
  }
  if (words[i].length > longest.length) {
    longest = words[i]
  }
  return findLongest(words, i + 1, longest)
}
console.log(findLongest(["hi", "hola", "a", "hello", "reallylongword"]))
/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0, newStr = "") {
  if (str[i]) {
    newStr = newStr.concat(str[i])
    return everyOther(str, i + 2, newStr)
  } else {
    return newStr
  }
}
console.log(everyOther("hello"))
/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (revString(str) === str) {
    return true
  }
  return false
}
console.log(isPalindrome("tacocat"))
/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (i > arr.length - 1) {
    return -1
  }
  if (arr[i] === val) {
    return i
  }
  else {
    return findIndex(arr, val, i + 1)
  }
}
let animals = ["duck", "cat", "pony"];
console.log(findIndex(animals, "porcupine"))
/** revString: return a copy of a string, but in reverse. */

function revString(str, i = str.length - 1, newStr = "") {
  if (newStr.length === str.length) {
    return newStr
  } else {
    newStr = newStr.concat(str[i])
    return revString(str, i - 1, newStr)
  }
}
console.log(revString("porcupine"))

let nestedObj = {
  firstName: "Lester",
  favoriteNumber: 22,
  moreData: {
    lastName: "Testowitz"
  },
  funFacts: {
    moreStuff: {
      anotherNumber: 100,
      deeplyNestedString: {
        almostThere: {
          success: "you made it!"
        }
      }
    },
    favoriteString: "nice!"
  }
};
/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, arr = []) {
  for (let value of Object.values(obj)) {
    if (typeof value === "string") {
      arr.push(value)
    }
    if (typeof value === "object") {
      gatherStrings(value, arr)
    }
  }
  return arr
}
console.log(gatherStrings(nestedObj))

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  findLongest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
