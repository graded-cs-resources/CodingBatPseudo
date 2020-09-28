/**---Solutions--- **/
// Warmup-1

const { theEnd } = require("./stringSolutions");

let solutions = {};

solutions.stringTimes = function stringTimes(str, n) {
  let finalStr = "";
  for (let i = 0; i < n; i++) {
    finalStr = finalStr + str;
  }
  return finalStr;

  // this could be done in a shorter way with the built-in
  // javascript method String.repeat - maybe try that?
};

solutions.SleepIn = `method sleepIn(WEEKDAY, VACATION)
  if NOT WEEKDAY OR VACATION then
    output "TRUE"
  else
    output "FALSE"
  end if
end method`;

solutions.MonkeyTrouble = `method MonkeyTrouble(ASMILE, BSMILE)
  if ASMILE AND BSMILE then
    output "TRUE"
  else
    if NOT ASMILE AND NOT BSMILE then
      output "TRUE"
    else
      output "FALSE"
    end if
  end if
end method`;


solutions.SumDouble = `method SumDouble(A, B)
  if A = B then
    output 2* (A + B)
  else
    output A + B
  end if
end method`;

solutions.Diff21 = `method Diff21(N)
  if N <= 21 then
    output 21 - N
  else
    output (N - 21) * 2
  end if
end method`;

solutions.nearHundred = function nearHundred(n) {
  if (Math.abs(100 - n) <= 10 || Math.abs(200 - n) <= n) {
    return true;
  } else {
    return false;
  }
};

solutions.missingChar = function missingChar(str, n) {
  front = str.substring(0, n);
  back = str.substring(n + 1, str.length);
  return front + back;
};

solutions.backAround = function backAround(str) {
  last = str.substring(str.length - 1);
  return last + str + last;
};

solutions.startHi = function startHi(str) {
  if (str.length < 2) {
    return false;
  }
  front = str.substring(0, 2);
  if (front == 'hi') {
    return true;
  } else {
    return false;
  }
};

solutions.hasTeen = function hasTeen(a, b, c) {
  if ((a >= 13 && a <= 19) ||
    (b >= 13 && b <= 19) ||
    (c >= 13 && c <= 19)) {
    return true;
  } else {
    return false;
  }
};

solutions.mixStart = function mixStart(str) {
  if (str.length < 3) {
    return false;
  }
  two = str.substring(1, 3);
  if (two == 'ix') {
    return true;
  } else {
    return false;
  }
};

solutions.close10 = function close10(a, b) {
  aDiff = Math.abs(a - 10);
  bDiff = Math.abs(b - 10);

  if (aDiff < bDiff) {
    return a;
  }
  if (bDiff < aDiff) {
    return b;
  }
  return 0;
};

solutions.stringE = function stringE(str) {
  count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == 'e') {
      count++;
    }
  }
  return (count >= 1 && count <= 3);
};

solutions.everyNth = function everyNth(str, n) {
  result = '';
  for (let i = 0; i < str.length; i = i + n) {
    result = result + str.charAt(i);
  }
  return result;
};



solutions.parrotTrouble = function parrotTrouble(talking, hour) {
  if (talking === true && (hour < 7 || hour > 20)) {
    return true;
  } else {
    return false;
  }
};

solutions.posNeg = function posNeg(a, b, negative) {
  if (negative === true) {
    return a < 0 && b < 0;
  }
  if ((a < 0 && b > 0) || a > 0 && b < 0) {
    return true;
  } else {
    return false;
  }
};

solutions.frontBack = function frontBack(str) {
  if (str.length <= 1) {
    return str;
  }
  mid = str.substring(1, str.length - 1);

  return (str.charAt(str.length - 1)) + mid + str.charAt(0);
};

solutions.or35 = function or35(n) {
  if (n % 3 == 0 || n % 5 == 0) {
    return true;
  } else {
    return false;
  }
};

solutions.icyHot = function icyHot(temp1, temp2) {
  if (temp1 < 0 && temp2 > 100 || temp2 < 0 && temp1 > 100) {
    return true;
  }
  return false;
};

solutions.loneTeen = function loneTeen(a, b) {
  const isTeen = function (num) {
    return num >= 13 && num <= 19;
  };
  const isTeenA = isTeen(a);
  const isTeenB = isTeen(b);
  return isTeenA && !isTeenB || !isTeenA && isTeenB;
};

solutions.startOz = function startOz(str) {
  result = '';

  if (str.length >= 1 && str.charAt(0) == 'o') {
    result += str.charAt(0);
  }
  if (str.length >= 2 && str.charAt(1) == 'z') {
    result += str.charAt(1);
  }
  return result;
};

solutions.in3050 = function in3050(a, b) {
  if ((a >= 30 && a <= 40 && b >= 30 && b <= 40) || (a >= 40 && a <= 50 && b >= 40 && b <= 50)) {
    return true;
  } else {
    return false;
  }
};

solutions.lastDigit = function lastDigit(a, b) {
  return (a % 10 == b % 10);
};



solutions.makes10 = function makes10(a, b) {
  return ((a == 10 || b == 10) || (a + b == 10));
};

solutions.notString = function notString(str) {
  if (str === null || str === undefined || str.substring(0, 3) === 'not') {
    return str;
  }
  return `not ${str}`;
};

solutions.front3 = function front3(str) {
  front = '';
  if (str.length >= 3) {
    front = str.substring(0, 3);
  } else {
    front = str;
  }
  return front + front + front;
};

solutions.front22 = function front22(str) {
  take = 2;
  if (take > str.length) {
    take = str.length;
  }
  front = str.substring(0, take);
  return front + str + front;
};

solutions.in1020 = function in1020(a, b) {
  if ((a >= 10 && a <= 20) || (b >= 10 && b <= 20)) {
    return true;
  } else {
    return false;
  }
};

solutions.delDel = function delDel(str) {
  if (str.length < 4) {
    return str;
  }
  let output = str;
  if (str.substring(1, 4) == 'del') {
    output = str.substring(0, 1) + str.substring(4, str.length);
  }
  return output;
};

solutions.intMax = function intMax(a, b, c) {
  max = 0;
  if (a > b) {
    max = a;
  } else {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  return max;
};

solutions.max1020 = function max1020(a, b) {
  const between1020 = function (num) {
    return num >= 10 && num <= 20;
  };
  let result = 0;
  if (between1020(a)) {
    result = a;
  }
  if (b > result && between1020(b)) {
    result = b;
  }
  return result;
};

solutions.endUp = function endUp(str) {
  if (str.length <= 3) {
    return str.toUpperCase();
  }
  cut = str.length - 3;
  front = str.substring(0, cut);
  back = str.substring(cut);

  return front + back.toUpperCase();
};

// Warmup-2
solutions.doubleX = function doubleX(str) {
  str.toLowerCase();
  x = str.indexOf('x');
  if (x == -1) {
    return false;
  }
  if (x >= str.length) {
    return false;
  }
  return str.substring(x + 1, x + 2) == 'x';
};

solutions.last2 = function last2(str) {
  count = 0;
  if (str.length < 2) {
    return 0;
  }
  end = str.substring(str.length - 2);
  for (x = 0; x < str.length - 2; x++) {
    sub = str.substring(x, x + 2);
    if (sub == end) {
      count++;
    }
  }
  return count;
};

solutions.array123 = function array123(nums) {
  return !!(nums.join('').match(/123/g));
};

solutions.altPairs = function altPairs(str) {
  result = '';
  for (x = 0; x < str.length; x += 4) {
    end = x + 2;
    if (end > str.length) {
      end = str.length;
    }
    result = result + str.substring(x, end);
  }
  return result;
};

solutions.noTriples = function noTriples(nums) {
  for (x = 0; x < nums.length - 2; x++) {
    first = nums[x];
    if (first == nums[x + 1]) {
      if (first == nums[x + 2]) {
        return false;
      }
    }
  } return true;
};

solutions.frontTimes = function frontTimes(str, n) {
  frontLen = 3;
  if (frontLen > str.length) {
    frontLen = str.length;
  }
  front = str.substring(0, frontLen);
  result = '';
  for (x = 0; x < n; x++) {
    result = result + front;
  }
  return result;
};

solutions.stringBits = function stringBits(str) {
  result = '';
  for (x = 0; x < str.length; x += 2) {
    result = result + str.substring(x, x + 1);
  }
  return result;
};

solutions.arrayCount9 = function arrayCount9(nums) {
  count = 0;
  for (x = 0; x < nums.length; x++) {
    if (nums[x] == 9) {
      count++;
    }
  }
  return count;
};

solutions.stringMatch = function stringMatch(a, b) {
  len = Math.min(a.length, b.length);
  count = 0;
  for (x = 0; x < len - 1; x++) {
    aSub = a.substring(x, x + 2);
    bSub = b.substring(x, x + 2);
    if (aSub == bSub) {
      count++;
    }
  }
  return count;
};

solutions.stringYak = function stringYak(str) {
  result = '';
  for (x = 0; x < str.length; x++) {
    if (x + 2 < str.length && str.charAt(x) == 'y' && str.charAt(x + 2) == 'k') {
      x = x + 2;
    } else {
      result = result + str.charAt(x);
    }
  }
  return result;
};

solutions.has271 = function has271(nums) {
  return !!(nums.join('').match(/271/g));
};

solutions.countXX = function countXX(str) {
  count = 0;
  for (x = 0; x < str.length; x++) {
    if (str.charAt(x) == 'x') {
      if (str.charAt(x + 1) == 'x') {
        count++;
      }
    }
  }
  return count++;
};

solutions.stringSplosion = function stringSplosion(str) {
  result = '';
  for (x = 0; x < str.length - 1; x++) {
    result = result + str.substring(0, x + 1);
  }
  return result;
};

solutions.arrayFront9 = function arrayFront9(nums) {
  for (x = 0; x < 4; x++) {
    if (nums[x] == 9) {
      return true;
    }
  }
  return false;
};

solutions.stringX = function stringX(str) {
  result = '';
  front = str.substring(0, 1);
  end = str.substring(str.length - 1);
  for (i = 1; i < str.length - 1; i++) {
    if (str.charAt(i) !== 'x') {
      result += str.charAt(i);
    }
  }
  return front + result + end;
};

solutions.array667 = function array667(nums) {
  count = 0;
  for (x = 0; x < nums.length; x++) {
    if (nums[x] == 6) {
      if (nums[x + 1] == 6 || nums[x + 1] == 7) {
        count++;
      }
    }
  } return count;
};

module.exports = solutions;