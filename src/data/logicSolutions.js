/** --- Solutions --- **/

let solutions = {};
solutions.cigarParty = function cigarParty(cigars, isWeekend) {
    if (isWeekend) {
      return cigars >= 40;
    }
    return cigars >= 40 && cigars <= 60;
  };

  
  solutions.dateFashion = function dateFashion(you, date) {
    if (you <= 2 || date <= 2) {
      return 0;
    }
  
    if (you >= 8 || date >= 8) {
      return 2;
    }
  
    return 1;
  };
  
  solutions.squirrelPlay = function squirrelPlay(temp, isSummer) {
    if (isSummer && temp >= 60 && temp <= 100) {
      return true;
    }
  
    if (!isSummer && temp >= 60 && temp <= 90) {
      return true;
    }
  
    return false;
  };
  
  solutions.caughtSpeeding = function caughtSpeeding(speed, isBirthday) {
    if (isBirthday) {
      if (speed <= 65) {
        return 0;
      } else if (speed >= 66 && speed <= 85) {
        return 1;
      } else if (speed >= 86) {
        return 2;
      }
    }
  
    if (speed <= 60) {
      return 0;
    } else if (speed >= 61 && speed <= 80) {
      return 1;
    } else {
      return 2;
    }
  };
  
  solutions.sortaSum = function sortaSum(a, b) {
    const res = a + b;
    if (res >= 10 && res <= 19) {
      return 20;
    }
    return res;
  };
  
  solutions.alarmClock = function alarmClock(day, vacation) {
    if (vacation) {
      if (day >= 1 && day <= 5) {
        return '10:00';
      } else return 'off';
    }
  
    if (day >= 1 && day <= 5) {
      return '7:00';
    } else return '10:00';
  };
  
  solutions.love6 = function love6(a, b) {
    if (a == 6 || b == 6) {
      return true;
    }
  
    if (a + b == 6 || Math.abs(a - b) == 6) {
      return true;
    }
  
    return false;
  };
  
  solutions.in1To10 = function in1To10(n, outsideMode) {
    if (outsideMode) {
      return (n <= 1 || n >= 10);
    }
    return (n >= 1 && n <= 10);
  };
  
  solutions.specialEleven = function specialEleven(n) {
    if (n % 11 == 0 || n % 11 == 1) {
      return true;
    }
    return false;
  };
  
  solutions.more20 = function more20(n) {
    return (n % 20 == 1 || n % 20 == 2);
  };
  
  solutions.old35 = function old35(n) {
    return (n % 3 == 0) != (n % 5 == 0);
  };
  
  solutions.less20 = function less20(n) {
    return (n % 20 == 18 || n % 20 == 19);
  };
  
  solutions.nearTen = function nearTen(num) {
    return (num % 10 <= 2 || num % 10 >= 8);
  };
  
  solutions.teenSum = function teenSum(a, b) {
    if ((a >= 13 && a <= 19) || (b >= 13 && b <= 19)) {
      return 19;
    }
    return a + b;
  };
  
  solutions.answerCell = function answerCell(isMorning, isMom, isAsleep) {
    if (isAsleep) {
      return false;
    }
  
    if (isMorning && !isMom) {
      return false;
    }
  
    return true;
  };
  
  solutions.teaParty = function teaParty(tea, candy) {
    if (tea >= 5 && candy >= 5) {
      if (tea >= candy * 2 || candy >= tea * 2) {
        return 2;
      }
      return 1;
    }
    return 0;
  };
  
  solutions.fizzString = function fizzString(str) {
    if (str[0] == 'f' && str[str.length - 1] == 'b') {
      return 'FizzBuzz';
    } else if (str[0] == 'f') {
      return 'Fizz';
    } else if (str[str.length - 1] == 'b') {
      return 'Buzz';
    } else { return str; }
  };
  
  solutions.fizzString2 = function fizzString2(n) {
    if (n % 3 == 0 && n % 5 == 0) {
      return 'FizzBuzz!';
    } else if (n % 3 == 0) {
      return 'Fizz!';
    } else if (n % 5 == 0) {
      return 'Buzz!';
    }
    return `${n.toString()}!`;
  };
  
  solutions.twoAsOne = function twoAsOne(a, b, c) {
    return a + b == c || a + c == b || b + c == a;
  };
  
  solutions.inOrder = function inOrder(a, b, c, bOk) {
    if (bOk) {
      return c > b;
    }
    return b > a && c > b;
  };
  
  solutions.inOrderEqual = function inOrderEqual(a, b, c, equalOk) {
    if (equalOk) {
      return a <= b && b <= c;
    }
    return a < b && b < c;
  };
  
  solutions.lastDigit = function lastDigit(a, b, c) {
    return a % 10 == b % 10 || b % 10 == c % 10 || a % 10 == c;
  };
  
  solutions.lessBy10 = function lessBy10(a, b, c) {
    return Math.abs(a - b) >= 10 || Math.abs(b - c) >= 10 || Math.abs(c - a) >= 10;
  };
  
  solutions.withoutDoubles = function withoutDoubles(die1, die2, noDoubles) {
    if (noDoubles) {
      if (die1 == die2) {
        if (die1 == 6 || die2 == 6) {
          die1 = 1;
          return die1 + die2;
        }
        return die1 + die2 + 1;
      }
    }
    return die1 + die2;
  };
  
  solutions.maxMod5 = function maxMod5(a, b) {
    if (a == b) {
      return 0;
    }
  
    if (a % 5 == b % 5) {
      if (a < b) {
            return a;
      } else {
            return b;
      }
    }
    return a > b ? a : b;
  };
  
  solutions.redTicket = function redTicket(a, b, c) {
    if (a == 2 && b == 2 && c == 2) {
      return 10;
    }
  
    if (a == b && b == c && a == c) {
      return 5;
    }
  
    if (b != a && c != a) {
      return 1;
    }
  
    return 0;
  };
  
  solutions.greenTicket = function greenTicket(a, b, c) {
    if (a == b && b == c) {
      return 20;
    }
  
    if (a == b || b == c || c == a) {
      return 10;
    }
  
    return 0;
  };
  
  solutions.blueTicket = function blueTicket(a, b, c) {
    if (a + b == 10 || b + c == 10 || a + c == 10) {
      return 10;
    }
  
    if (a + b == b + c + 10 || a + b == c + a + 10) {
      return 5;
    }
  
    return 0;
  };
  
  solutions.shareDigit = function shareDigit(a, b) {
    const aFirst = Math.floor(a / 10);
    const aLast = a % 10;
  
    if (aFirst == Math.floor(b / 10) || aFirst == b % 10) {
      return true;
    }
  
    if (aLast == Math.floor(b / 10) || aLast == b % 10) {
      return true;
    }
  
    return false;
  };
  
  solutions.sumLimit = function sumLimit(a, b) {
    const aLen = Math.abs(a).toString().length;
    const bLen = Math.abs(b).toString().length;
    const res = a + b;
    const resLen = Math.abs(res).toString().length;
  
    if (resLen == aLen) {
      return res;
    } else if (resLen >= aLen) {
      return a;
    }
  };
  
  // Logic-2
  
  solutions.makeBricks = function makeBricks(small, big, goal) {
      // not enough bricks
    if (goal > big * 5 + small) {
      return false;
    }
  
      // not enough small bricks
    if (goal % 5 > small) {
      return false;
    }
  
    return true;
  };
  
  solutions.loneSum = function loneSum(a, b, c) {
    let sum = 0;
    if (a != b && a != c) {
      sum += a;
    }
  
    if (b != c && b != a) {
      sum += b;
    }
  
    if (c != a && c != b) {
      sum += c;
    }
  
    return sum;
  };
  
  solutions.luckySum = function luckySum(a, b, c) {
    let sum = 0;
    const arr = [a, b, c];
  
    for (let i = 0; i <= 2; i++) {
      if (arr[i] != 13) {
        sum += arr[i];
      } else {
        return sum;
      }
    }
    return sum;
  };
  
  
  // TODO: make it work for two funcs
  solutions.noTeenSum = function noTeenSum(a, b, c) {
    const fixTeen = function (n) {
      if (n >= 13 && n <= 19 && n != 15 && n != 16) {
        return 0;
      }
  
      return n;
    };
    return fixTeen(a) + fixTeen(b) + fixTeen(c);
  };
  
  
  solutions.roundSum = function roundSum(a, b, c) {
    const round10 = function (num) {
      return Math.round(num / 10) * 10;
    };
    return round10(a) + round10(b) + round10(c);
  };
  
  solutions.closeFar = function closeFar(a, b, c) {
    const far = function (x, y) {
      return (Math.abs(x - y) >= 2);
    };
  
    const close = function (x, y) {
      return Math.abs(x - y) <= 1;
    };
  
    if (close(a, b) && far(b, c) && far(a, c)) {
      return true;
    } else if (close(a, c) && far(b, c) && far(a, b)) {
      return true;
    }
  
    return false;
  };
  
  
  solutions.blackjack = function blackjack(a, b) {
    if (a > 21 && b > 21) {
      return 0;
    }
  
    const big = Math.max(a, b);
    const small = Math.min(a, b);
  
    if (big <= 21) {
      return big;
    } else if (small <= 21) {
      return small;
    }
  };
  
  solutions.evenlySpaced = function evenlySpaced(a, b, c) {
    const max = Math.max(a, b, c);
    const min = Math.min(a, b, c);
    const mid = a + b + c - max - min;
  
    return max - mid == mid - min;
  };
  
  solutions.makeChocolate = function makeChocolate(small, big, goal) {
      // not enough
    if (small + big * 5 < goal) {
      return -1;
    }
  
    const bigsNeeded = Math.floor(goal / 5);
  
    const bigsUsed = Math.min(big, bigsNeeded);
     // how many leftover
    const smallsNeeded = goal - bigsUsed * 5;
  
    return smallsNeeded;
  };
  
  
    // {
    //   title: 'AP-1',
    //   name: 'scoresIncreasing',
    //   question: 'Given an array of scores, return true if each score is equal or greater than the one before. The array will be length 2 or more.',
    //   inputs: [
    //     '([1, 3, 4])',
    //     '([1, 3, 2])',
    //     '([1, 1, 4])',
    //     '([1, 1, 2, 4, 4, 7])',
    //     '([1, 1, 2, 4, 3, 7])',
    //     '([-5, 4, 11])',
    //   ],
    // },
    // {
    //   title: 'AP-1',
    //   name: 'scores100',
    //   question: 'Given an array of scores, return true if there are scores of 100 next to each other in the array. The array length will be at least 2.',
    //   inputs: [
    //     '([1, 100, 100])',
    //     '([1, 100, 99, 100])',
    //     '([100, 1, 100, 100])',
    //     '([100, 1, 100, 1])',
    //     '([1, 2, 3, 4, 5])',
    //     '([1, 2, 100, 4, 5])',
    //   ],
    // },

module.exports = solutions;