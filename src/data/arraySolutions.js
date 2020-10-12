/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable semi */
/* eslint-disable prefer-const */
/** --- Solutions --- **/
// Array-1

let solutions = {};

// solutions in pseudocode are STRINGS. Notice that the string
// starts with a backtick - that allows it to span multiple lines
// Make sure the names match perfectly, including case
solutions.FirstLast6 = `method FirstLast6(NUMS)
  END = NUMS.length - 1
  if NUMS[0] = 6 OR NUMS[END] = 6 then
    output "TRUE"
  else
    output "FALSE"
  end if
end method`;

solutions.SameFirstLast = `method SameFirstLast(NUMS)
  END = NUMS.length - 1
  if END <> 0 AND NUMS[END] = NUMS[0] then
    output "True"
  else
    output "False"
  end if
end method`;


solutions.CommonEnd = `method CommonEnd(ARR1, ARR2)
  if ARR1[0] = ARR2[0] OR ARR1[ARR1.length - 1] = ARR2[ARR2.length - 1] then
    output "TRUE"
  else
    output "FALSE"
  end if
end method`

solutions.MaxEnd = `method MaxEnd(NUMS)
  if NUMS[0] > NUMS[NUMS.length-1] then
    MAX = NUMS[0]
  else
    MAX = NUMS[NUMS.length-1]
  end if
  loop I from 0 to NUMS.length-1
    NUMS[I] = MAX
  end loop
  output NUMS
end method`

solutions.Sum2 = `method Sum2(NUMS)
  if NUMS.length = 0 then
    output 0
  else if NUMS.length = 1 then
    output NUMS[0]
  else
    output NUMS[0]+NUMS[1]
  end if
end method`;

solutions.MiddleWay = `method MiddleWay(ARR1, ARR2)
  NEW = [ARR1[1], ARR2[1]];
  output NEW
end method`;

solutions.MakeEnds = `method MakeEnds(ARR)
  NEW = [ARR[0], ARR[ARR.length - 1]]
  output NEW
end method`;

solutions.Has23 = `method Has23(NUMS)
  if NUMS[0] = 2 OR NUMS[0] = 3 OR NUMS[1] = 2 OR NUMS[1] = 3 then
    output TRUE
  else
    output FALSE
  end if
end method`;


solutions.no23 = function no23(nums) {
  if (nums[0] == 2 || nums[0] == 3 || nums[1] == 2 || nums[2] == 3) {
    return false;
  } else {
    return true;
  }
}

solutions.makeLast = function makeLast(nums) {
  let newLength = nums.length * 2;
  let newArray = [];
  for (let i = 0; i < newLength; i++) {
    newArray[i] = 0;
  }
  newArray[newLength - 1] = nums[nums.length - 1];
  return newArray;
}

solutions.double23 = function double23(nums) {
  if (nums.length < 2) {
    return false;
  }
  else if ((nums[0] == 2 && nums[1] == 2) || (nums[0] == 3 && nums[1] == 3)) {
    return true
  } else {
    return false;
  }
}

solutions.fix23 = function fix23(nums) {
  //since the length is three, the only options are the first two or last two elements
  if (nums[0] == 2 && nums[1] == 3) {
    nums[1] = 0;
  } else if (nums[1] == 2 && nums[2] == 3) {
    nums[2] = 0;
  }
  return nums;
}

solutions.findTheMedian = function findTheMedian(nums) {
  //where is the sort method? 
  let end = nums.length - 1;
  let mid = nums.length / 2
  if (nums.length % 2 === 1) {
    return nums[end / 2];
  }
  else {
    return (nums[mid - 1] + nums[mid]) / 2;
  }
}

solutions.start1 = function start1(a, b) {
  let count = 0;
  if (a[0] == 1) {
    count += 1;
  }

  if (b[0] == 1) {
    count += 1;
  }

  return count;
}

solutions.biggerTwo = function biggerTwo(a, b) {
  if (b[0] + b[1] > a[0] + a[1]) {
    return b;
  }
  else if (a[0] + a[1] > b[0] + b[1]) {
    return a;
  }
  else return a;
}

solutions.makeMiddle = function makeMiddle(nums) {
  // consider an example. If the array has length 4
  // then half will be 2, and we want the 2nd and third elements
  // which will have index 1 (half - 1) and 2 (half)
  let half = nums.length / 2;
  return [nums[half - 1], nums[half]];
}

solutions.plusTwo = function plusTwo(a, b) {
  let duoArr = [];
  duoArr[0] = a[0];
  duoArr[1] = a[1];
  duoArr[2] = b[0];
  duoArr[3] = b[1];

  return duoArr;
}

solutions.swapEnds = function swapEnds(nums) {
  // save the first value temporarily
  let first = nums[0]
  // move the last value into the first value
  nums[0] = nums[nums.length - 1];
  // move the first value into the last place
  nums[nums.length - 1] = first;
  return nums;
}

solutions.findLowestIndex = function findLowestIndex(nums) {
  let minVal = nums[0];
  let minValIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < minVal) {
      minVal = nums[i]
      minValIndex = i;
    }
  }
  return minValIndex;
}




solutions.midThree = function midThree(nums) {
  //if our array is of size 3, we want our "pivot" (middle) index to be 1
  // we can do this with (size - 1)/2
  let half = (nums.length - 1) / 2;
  return [nums[half - 1], nums[half], nums[half + 1]];
}

solutions.maxTriple = function maxTriple(nums) {
  let mid = nums[(nums.length - 1) / 2];
  let start = nums[0]
  let end = nums[nums.length - 1];

  if (mid > start && mid > end) {
    return mid;
  }
  else if (start > mid && start > end) {
    return start;
  } else {
    return end;
  }
}

solutions.frontPiece = function frontPiece(nums) {
  if (nums.length < 2) {
    return nums;
  }
  return [nums[0], nums[1]];
}

solutions.unlucky1 = function unlucky1(nums) {
  if ((nums[0] == 1 && nums[1] == 3) || (nums[nums.length - 2] == 1 && nums[nums.length - 1] == 3)) {
    return true;
  }
  else return false;
}

solutions.make2 = function make2(a, b) {
  if (a.length >= 2) {
    return [a[0], a[1]]
  }
  else if (a.length == 1) {
    return [a[0], b[0]]
  }
  else return [b[0], b[1]]
}

solutions.front11 = function front11(a, b) {
  if (a.length == 0) {
    return [b[0]]
  }
  else if (b.length == 0) {
    return [a[0]]
  }
  else if (a.length == 0 && b.length == 0) {
    return []
  }
  else return [a[0], b[0]]
}



// Array-2

solutions.countEvens = function countEvens(nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      count += 1;
    }
  }
  return count;
}

solutions.bigDiff = function bigDiff(nums) {
  //changed it to a loop problem 
  //Math.abs returns the absolute value of a number 
  let max = nums[0]
  let min = nums[0]
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i]
    }
    else if (nums[i] < min) {
      min = nums[i]
    }
  }
  return Math.abs(max - min);
}

solutions.centeredAverage = function centeredAverage(nums) {
  let max = nums[0]
  let min = nums[0]
  let maxIndex = 0;
  let minIndex = 0;
  for (let i = 0; i < nums.length; i++) {//find max and min 
    if (nums[i] >= max) {
      max = nums[i]
      maxIndex = i;
    }
    else if (nums[i] < min) {
      min = nums[i]
      minIndex = i;
    }
  }
  let total = 0;
  for (let i = 0; i < nums.length; i++) {//if the index of element is neither a maxIndex or minIndex, add to total
    if (!(i == maxIndex || i == minIndex)) {
      total = total + nums[i]
    }
  }
  return total / (nums.length - 2)

}

solutions.sum13 = function sum13(nums) {
  let pre13 = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 13 || nums[i - 1] == 13) {

    } else {
      pre13.push(nums[i]);
    }
  }
  let sum = pre13.reduce((a, b) => a + b, 0)
  return sum;
}

solutions.sum67 = function sum67(nums) {
  let summ = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 6) {
      summ += nums[i];
    } else {
      while (nums[i] != 7) {
        i++;
      }
    }
  }
  return summ;
}

solutions.has22 = function has22(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 2 && nums[i + 1] == 2) {
      return true;
    }
  }
  return false;
}

solutions.lucky13 = function lucky13(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1 || nums[i] == 3) {
      return false;
    }
  }
  return true;

}

solutions.sum28 = function sum28(nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 2) {
      count += nums[i];
    }
  }
  return count == 8;
}

solutions.more14 = function more14(nums) {

  let one = 0;
  let four = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      one += 1;
    }

    if (nums[i] == 4) {
      four += 1;
    }
  }
  if (one > four) {
    return true;
  } else {
    return false;
  }
}

solutions.Array = function fizzArray(n) {
  let newA = [];
  for (let i = 0; i < n; i++) {
    newA[i] = i;
  }
  return newA;
}

solutions.prependSum = function prependSum(nums) {
  let arr = [];
  arr[0] = nums[0] + nums[1]
  for (let i = 2; i < nums.length; i++) {
    arr[i - 1] = nums[i]; //nums start at i=2 because the first two elements were removed
  }
  return arr;
}



solutions.only14 = function only14(nums) {

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 4 && nums[i] != 1) {
      return false;
    }
  }
  return true;
}

solutions.fizzArray2 = function fizzArray2(n) {
  let nu = [];
  for (let i = 0; i < n; i++) {
    nu[i] = i.toString();
  }
  return nu;
}

solutions.no14 = function no14(nums) {
  let has1 = false;
  let has4 = false;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      has1 = true;
    }

    if (nums[i] == 4) {
      has4 = true;
    }

  }
  if (has1 == true && has4 == true) {
    return false;
  }
  else return true;
}

solutions.isEverywhere = function isEverywhere(nums, val) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] != val && nums[i + 1] != val) {
      return false;
    }
  }
  return true;
}

solutions.either24 = function either24(nums) {
  let has22 = false;
  let has44 = false;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] == 2 && nums[i + 1] == 2)
      has22 = true;

    if (nums[i] == 4 && nums[i + 1] == 4)
      has44 = true;
  }

  if (has22 != has44) {//both boolean values must be different (both true -> false, both false-> false)
    return true;
  }
  else return false;
}

solutions.matchUp = function matchUp(nums1, nums2) {
  //Math.abs(a-b) calculates the absolute value of the difference between a and b
  let count = 0;
  for (let i = 0; i < nums1.length; i++) {
    let diff = Math.abs(nums1[i] - nums2[i]);
    if (diff > 0 && diff < 3) {
      count += 1;
    }
  }
  return count;
}

solutions.has77 = function has77(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if ((nums[i] == 7 && nums[i + 1] == 7) || (nums[i] == 7 && nums[i + 2] == 7)) {
      return true;
    }
  }
  return false;
}

solutions.has12 = function has12(nums) {
  let has1 = false;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      has1 = true;
    }

    if (has1 == true && nums[i] == 2) {
      return true;
    }
  }
  return false;
}

solutions.modThree = function modThree(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] % 2 == nums[i + 1] % 2 && nums[i + 1] % 2 == nums[i + 2] % 2) {
      return true;
    }
  }
  return false;
}

solutions.haveThree = function haveThree(nums) {
  let three = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 3) {
      three++;
    }
    if (nums[i + 1] == 3 && nums[i] == 3) {
      return false;
    }

  }
  if (three == 3) {
    return true;
  }
  else return false;
}

solutions.twoTwo = function twoTwo(nums) {
  for (let i = 0; i < nums.length; i++) {
    if ((nums[i] == 2) && (nums[i + 1] == 2)) {
      i = i + 2//if 2 is already found, skip two indexes because the last 2 is already accounted for 
    }
    else if ((nums[i] == 2) && (nums[i + 1] != 2))
      return false;
  }
  return true;
}

solutions.sameEnds = function sameEnds(nums, len) {
  let front = nums.slice(0, len);
  let end = nums.slice(nums.length - len);

  return front.toString() == end.toString();
}

solutions.tripleUp = function tripleUp(nums) {
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] + 1 == nums[i + 1] && nums[i + 1] + 1 == nums[i + 2]) {
      return true;
    }
  }
  return false;
}

solutions.fizzArray3 = function fizzArray3(start, end) {
  let count = 0;
  for (let i = start; i < end; i++) {
    arr[count] = i;
    count++;
  }
  return arr
}

solutions.shiftLeft = function shiftLeft(nums) {
  let firstVal = nums[0]
  for (let i = 0; i < nums.length - 1; i++) {
    let temp = nums[i];
    nums[i] = nums[i + 1]
    nums[i + 1] = nums[i]
  }
  nums[nums.length - 1] = firstVal
  return nums
}

solutions.tenRun = function tenRun(nums) {
  let i = 0;
  while (i < nums.length - 1) {
    if (nums[i] % 10 == 0 && !(nums[i + 1] % 10 == 0)) {//if the current number is a multiple of 10 AND the next number is NOT a multiple of 10 
      nums[i + 1] = nums[i];
      i++;
    }
    else i++;
  }
  return nums;
}

solutions.pre4 = function pre4(nums) {
  //array.push(num) adds num to array 

  let b44 = [];

  let i = 0;

  while (i < nums.length && nums[i] != 4) {
    b44.push(nums[i]);
    i++;
  }
  return b44;
}

solutions.post4 = function post4(nums) {
  let arr = [];
  let index4;
  for (let i = 0; i < nums.length; i++) {//get the largest index of 4
    if (nums[i] == 4) {
      index4 = i;
    }
  }
  for (let c = 0; c < nums.length - 1 - index4; c++) {
    arr[c] = nums[c + 1 + index4]//put the values after 4 into an array
  }
  return arr;
}

solutions.notAlone = function notAlone(nums, val) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] == val) {
      if (nums[i + 1] == undefined) {
        return nums;
      }

      if (nums[i - 1] == val || nums[i + 1] == val) {

      }
      else if (nums[i - 1] == undefined) {

      }
      else if (nums[i - 1] > nums[i + 1]) {
        nums[i] = nums[i - 1];
      } else {
        nums[i] = nums[i + 1];
      }
    }
  }
  return nums;
}

solutions.zeroFront = function zeroFront(nums) {
  if (nums.length == 0)
    return nums;

  let i = 0;

  while (nums[i] == 0)
    i++;

  for (let j = i + 1; j < nums.length; j++) {
    if (nums[j] == 0) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
    }
  }

  return nums;
}

solutions.withoutTen = function withoutTen(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 10) {
      nums[i] = 0;
      for (let c = i; c < nums.length - 1; c++) {
        let temp = nums[c]//basic swap between left and right 
        nums[c] = nums[c + 1];
        nums[c + 1] = temp;
        if (nums[c] == 10) {//if ten replaces another ten, do the step one more time 
          i = i - 1;
        }
      }
    }
  }
  return nums;
}

solutions.zeroMax = function zeroMax(nums) {
  let odd = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      for (let c = i + 1; c < nums.length; c++) {//find largest odd value RIGHT of the 0 
        if (nums[c] > odd && nums[c] % 2 == 1) {
          odd = nums[c];
        }
      }
      nums[i] = odd;
      odd = 0;//reset odd just in case there is a larger number before the current 0. 
    }
  }
  return nums;
}

solutions.evenOdd = function evenOdd(nums) {
  //array.concat(array1) combines the two arrays. Use it wisely 
  //array.push(num) adds a variable num to the array 
  let even = [];
  let odd = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      even.push(nums[i])
    }
    else {
      odd.push(nums[i])
    }
  }
  return even.concat(odd)
}

function isEven(num) {
  return num % 2 == 0;
}

function isOdd(num) {
  return num % 2 != 0;
}

solutions.fizzBuzz = function fizzBuzz(start, end) {
  let strArray = [];
  let count = 0;
  for (let i = start; i < end; i++) {
    if (i % 3 == 0 && !(i % 5 == 0)) {
      strArray[count] = "Fizz"
      count++;
    }
    else if (i % 5 == 0 && !(i % 3 == 0)) {
      strArray[count] = "Buzz"
      count++;
    }
    else if (i % 3 == 0 && i % 5 == 0) {
      strArray[count] = "FizzBuzz"
      count++;
    }
    else {
      strArray[count] = i.toString();
      count++;
    }
  }
  return strArray;
}

// Array-3

solutions.maxSpan = function maxSpan(nums) {
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    let j = nums.length - 1;

    while (nums[i] != nums[j]) {
      j--;
    }

    let span = j - i + 1;

    if (span > max)
      max = span;
  }

  return max;
}

solutions.fix34 = function fix34(nums) {
  let i = 0;

  while (i < nums.length && nums[i] != 3)
    i++;

  let j = i + 1;

  while (j < nums.length && nums[j] != 4)
    j++;

  while (i < nums.length) {
    if (nums[i] == 3) {
      let temp = nums[i + 1];
      nums[i + 1] = nums[j];
      nums[j] = temp;

      while (j < nums.length && nums[j] != 4)
        j++;
    }
    i++;
  }

  return nums;
}

solutions.fix45 = function fix45(nums) {

  let i = 0;
  let j = 0;

  while (j < nums.length && nums[j] != 5) {
    j++;
  }

  while (i < nums.length) {
    if (nums[i] == 4) {
      let temp = nums[i + 1];
      nums[i + 1] = nums[j];
      nums[j] = temp;

      while ((j < nums.length && nums[j] != 5) || j == i + 1)
        j++;
    }
    i++;
  }
  return nums;
}

solutions.canBalance = function canBalance(nums) {
  let first = 0;
  let second = 0;

  for (let i = 0; i < nums.length; i++) {
    second += nums[i]; //adding all nums together
  }

  for (let i = 0; i <= nums.length - 2; i++) {
    first += nums[i];
    second -= nums[i];

    if (first == second) {
      return true;
    }
  }

  return false;
}

solutions.linearIn = function linearIn(outer, inner) {
  //index for inner array, also acts as a 'count' variable
  let j = 0;

  //looping through the outer array once. looking for matches.
  for (let i = 0; i < outer.length; i++) {
    if (inner[j] == outer[i]) {
      j++;
    }
  }

  return j == inner.length;

}

solutions.squareUp = function squareUp(n) {

  let subArray = [];
  let j = n;
  while (j > 0) {
    subArray.push(0);
    j--;
  }

  let output = [];

  for (let i = n - 1; i >= 0; i--) {
    subArray.splice(i, 1, n - i);
    output = output.concat(subArray);
  }
  return output;
}

solutions.seriesUp = function seriesUp(n) {
  let modArr = [];

  for (let i = 0; i < n; i++) {
    let j = i;
    let x = 1;
    while (j >= 0) {
      modArr.push(x);
      x += 1;
      j--;
    }
    x = 1;
  }
  return modArr;
}

solutions.maxMirror = function maxMirror(nums) {
  //This solution was made by Sung Ho Park. He took 5 hours to simplify the solution. You're welcome. 
  //.includes() method checks whether a specific string exists within an string or not.toString() converts a number to a string 
  if (nums.length == 0) {
    return 0;
  }
  //reverses nums and makes it into a string 
  let reverse = "";
  reverse = reverse + nums[nums.length - 1];
  for (let i = nums.length - 2; i >= 0; i--) {
    reverse = reverse + "," + nums[i].toString();
  }
  let maxNum = nums.length - 1;
  while (maxNum >= 0) {
    for (let i = 0; i < nums.length - maxNum; i++) {
      if (reverse.includes(createCandidate(nums, i, maxNum + i))) {
        return maxNum + i + 1 - i;
      }
    }
    maxNum = maxNum - 1;
  }
  function createCandidate(num, min, max) {//creates candidates between ranges of min and max
    let answer = "";
    answer = answer + num[min].toString();
    for (let c = min + 1; c < max + 1; c++) {
      answer = answer + "," + num[c].toString();
    }
    return answer;
  }
}

solutions.countClumps = function countClumps(nums) {
  let yardStick = -1;
  let clumps = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1] && nums[i] != yardStick) {
      clumps += 1;
      yardStick = nums[i];
    } else {
      if (nums[i] != yardStick) {
        yardStick = -1
      }
    };
  }
  return clumps;
}
module.exports = solutions;
