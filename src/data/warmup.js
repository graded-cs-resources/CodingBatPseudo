module.exports = [
  {
    title: "Warmup",
    name: "SleepIn",
    question: `The parameter WEEKDAY is TRUE if it is a weekday, and the parameter
         VACATION is FALSE if we are on vacation. We sleep in if it is not a weekday or
         we're on vacation. Output TRUE if we sleep in, FALSE if we do not.`,
    solution: `method sleepIn(WEEKDAY, VACATION)
  if NOT WEEKDAY OR VACATION then
    output TRUE
  else
    output FALSE
  end if
end method`,
    inputs: [

      "(TRUE, TRUE)",
      "(TRUE, FALSE)",
      "(FALSE, TRUE)",
      "(FALSE, FALSE)"
    ],
  }, {
    title: "Warmup",
    name: "MonkeyTrouble",
    question: `We have two monkeys, a and b, and the parameters ASMILE and
              BSMILE indicate if each is smiling. We are in trouble if they are both smiling
              or if neither of them is smiling. Output TRUE if we are in trouble, FALSE otherwise.`,
    solution: `method MonkeyTrouble(ASMILE, BSMILE)
  if (ASMILE AND BSMILE) OR (NOT ASMILE AND NOT BSMILE) then
  // alternative: if ASMILE = BSMILE then
    output TRUE
  else
    output FALSE
  end if
end method`,
    inputs: [
      "(TRUE, TRUE)",
      "(FALSE, FALSE)",
      "(TRUE, FALSE)",
      "(FALSE, TRUE)"
    ],
  }, {
    title: "Warmup",
    name: "SumDouble",
    question: `Given two numbers, output their sum. Unless the two values are the same,
       then output double their sum.`,
    solution: `method SumDouble(A, B)
  if A = B then
    output 2* (A + B)
  else
    output A + B
  end if
end method`,
    inputs: [
      "(1, 2)",
      "(3, 2)",
      "(2, 2)",
      "(-1, 0)",
      "(3, 3)",
      "(0, 0)",
      "(0, 1)",
      "(3, 4)"
    ],
  }, {
    title: "Warmup",
    name: "Diff21",
    question: `Given an number, N, output the absolute difference between N and 21,
                except output double the absolute difference if N is over 21.`,
    solution: `method Diff21(N)
  if N <= 21 then
    output 21 - N
  else
    output (N - 21) * 2
  end if
end method`,
    inputs: [
      "(19)",
      "(10)",
      "(21)",
      "(22)",
      "(25)",
      "(30)",
      "(0)",
      "(1)",
      "(2)",
      "(-1)",
      "(-2)",
      "(50)"
    ],
  }, {
    title: "Warmup",
    name: "ParrotTrouble",
    question: `We have a loud talking parrot. The "hour" parameter is the current hour time in the range 0..23.
    We are in trouble if the parrot is talking and the hour is before 7 or after 20.
    Output TRUE if we are in trouble.`,
    solution: `method ParrotTrouble(TALKING, HOUR)
  if TALKING AND (HOUR < 7 OR HOUR > 20) then
    output TRUE
  else 
    output FALSE
  end if
end method`,
    inputs: [
      "(TRUE, 6)",
      "(TRUE, 7)",
      "(FALSE, 6)",
      "(TRUE, 21)",
      "(FALSE, 21)",
      "(TRUE, 23)",
      "(FALSE, 23)",
      "(TRUE, 20)",
      "(FALSE, 12)"
    ],
  }, {
    title: "Warmup",
    name: "Makes10",
    question: `Given 2 numbers, A and B, Output TRUE if one if them is 10 or if their sum is 10.`,
    solution: `method Makes10(A, B)
  if A = 10 OR B = 10 OR (A + B = 10) then
    output TRUE
  else
    output FALSE
  end if
end method`,
    inputs: [
      "(9, 10)",
      "(9, 9)",
      "(1, 9)",
      "(10, 1)",
      "(10, 10)",
      "(8, 2)",
      "(8, 3)",
      "(10, 42)",
      "(12, -2)"
    ],
  }, {
    title: "Warmup",
    name: "NearHundred",
    question: `Given a number N, Output TRUE if it is within 10 of 100 or 200.`,
    solution: `method nearHundred(N) 
  if (100 - N) >= -10 AND (100 - N) <= 10 then
    output TRUE
  else if (200 - N) >= -10 AND (200 - N) <= 10 then
    output TRUE
  else
    output FALSE
  end if
end method`,
    inputs: [
      "(93)",
      "(90)",
      "(89)",
      "(110)",
      "(111)",
      "(121)",
      "(0)",
      "(5)",
      "(191)",
      "(189)"
    ],
  }, {
    title: "Warmup",
    name: "PosNeg",
    question: `Given 2 number values, Output TRUE if one is negative and one is positive.
          Except if the parameter NEGATIVE is TRUE, then output TRUE only if both are negative.`,
    solution: `method PosNeg(A, B, NEGATIVE) 
  if NEGATIVE then
    if A < 0 AND B < 0 then
      output TRUE
    else
      output FALSE
    end if
  else if (A < 0 AND B > 0) OR (A > 0 AND B < 0) then
    output TRUE
  else
    output FALSE
  end if
end method`,
    inputs: [
      "(1, -1, FALSE)",
      "(-1, 1, FALSE)",
      "(-4, -5, TRUE)",
      "(-4, -5, FALSE)",
      "(-4, 5, FALSE)",
      "(-4, 5, TRUE)",
      "(1, 1, FALSE)",
      "(-1, -1, FALSE)",
      "(1, -1, TRUE)",
      "(-1, 1, TRUE)",
      "(1, 1, TRUE)",
      "(-1, -1, TRUE)",
      "(5, -5, FALSE)",
      "(-6, 6, FALSE)",
      "(-5, -6, FALSE)",
      "(-2, -1, FALSE)",
      "(1, 2, FALSE)",
      "(-5, 6, TRUE)",
      "(-5, -5, TRUE)"
    ],
  }, {
    title: "Warmup",
    name: "NotString",
    question: `Given a string, output a new string where "not " has been added to the front. However,
      if the string already begins with "not", output the string unchanged. You can use the method STRING.SubStr(S,L)
      where S is the first index in the substring (first char is 0!) and L is how many chars you want`,
    solution: `method NotString(STR)
  if STR.SubStr(0,3) = "not" then
    output STR
  else 
    output "not"+ STR
  end if
end method`,
    inputs: [
      "('candy')",
      "('x')",
      "('not bad')",
      "('bad')",
      "('not')",
      "('is not')",
      "('no')"
    ],
  }, {
    title: "Warmup",
    name: "Front3",
    question: `Given a string, we'll say that the front is the first 3 chars of the string.
              If the string length is less than 3, the front is whatever is there. Return a new
              string which is 3 copies of the front. You can use the method STRING.SubStr(S,L)
              where S is the first index in the substring (first char is 0!) and L is how many chars you want.`,
    solution: `method Front3(STR) 
  FRONT = STR.SubStr(0,3)
  output FRONT + FRONT + FRONT
end method`,
    inputs: [
      "('Java')",
      "('Chocolate')",
      "('abc')",
      "('abcXYZ')",
      "('ab')",
      "('a')",
      "('')"
    ],
  }, {
    title: "Warmup",
    name: "Or35",
    question: `Output TRUE if the given non- negative number is a multiple of 3 or a
              multiple of 5.(Hint: Use the < code > mod operator)`,
    solution: `method Or35(n) 
  if n mod 3 = 0 OR n mod 5 = 0 then 
    output TRUE
  else
    output FALSE
  end if
end method`,
    inputs: [
      "(3)",
      "(10)",
      "(8)",
      "(15)",
      "(5)",
      "(4)",
      "(9)",
      "(4)",
      "(7)",
      "(6)",
      "(17)",
      "(18)",
      "(29)",
      "(20)",
      "(21)",
      "(22)",
      "(45)",
      "(99)",
      "(100)",
      "(101)",
      "(121)",
      "(122)",
      "(123)"
    ],
  }, {
    title: "Warmup",
    name: "Front22",
    question: `Given a string, take the first 2 chars and output the string with the 2
  chars added at both the front and back, so 'kitten' yields 'kikittenki'. You can use the method STRING.SubStr(S,L)
  where S is the first index in the substring (first char is 0!) and L is how many chars you want.`,
    solution: `method Front22(STR) 
  FRONT = STR.SubStr(0, 2)
  output FRONT + STR + FRONT
end method`,
    inputs: [
      "('kitten')",
      "('Ha')",
      "('abc')",
      "('ab')",
      "('a')",
      "('')",
      "('Logic')"
    ],
  }, {
    title: "Warmup",
    name: "StartHi",
    question: `Given a string, Output TRUE if the string starts with 'hi'and
  FALSE otherwise. You can use the method STRING.SubStr(S,L)
  where S is the first index in the substring (first char is 0!) and L is how many chars you want.`,
    solution: `method StartHi(STR) 
  front = STR.SubStr(0,2);
  if front = 'hi' then
    output TRUE
  else
    output FALSE
  end if
end method`,
    inputs: [
      "('hi there')",
      "('hi')",
      "('hello hi')",
      "('he')",
      "('h')",
      "('')",
      "('ho hi')",
      "('hi ho')"
    ],
  }, {
    title: "Warmup",
    name: "IcyHot",
    question: `Given two temperatures, Output TRUE if one is less than 0 and the
  other is greater than 100.`,
    solution: `method IcyHot(temp1, temp2) 
  if temp1 < 0 AND temp2 > 100 OR temp2 < 0 AND temp1 > 100 then
    output TRUE
  end if
  output FALSE
end method`,
    inputs: [
      "(120, -1)",
      "(-1, 120)",
      "(2, 120)",
      "(-1, 100)",
      "(-2, 120)",
      "(120, 120)"
    ],
  }, {
    title: "Warmup",
    name: "In1020",
    question: `Given 2 number values, Output TRUE if either or both of them is in the range
  10..20 inclusive.`,
    solution: `method In1020(A, B) 
  if (A >= 10 AND A <= 20) OR (B >= 10 AND B <= 20) then
    output TRUE
  else
    output FALSE
  end if
end method`,
    inputs: [
      "(12, 99)",
      "(21, 12)",
      "(8, 99)",
      "(99, 10)",
      "(20, 20)",
      "(21, 21)",
      "(9, 9)"
    ],
  }, {
    title: "Warmup",
    name: "HasTeen",
    question: `We'll say that a number is 'teen' if it is in the range 13..19 inclusive. Given 3 int values,
  Output TRUE if 1 or more of them are teen.`,
    solution: `method HasTeen(A, B, C) 
  if (A >= 13 AND A <= 19) OR (B >= 13 AND B <= 19) OR (C >= 13 AND C <= 19) then
    output TRUE
  else
    output FALSE
  end if
end method`,
    inputs: [
      "(13, 20, 10)",
      "(20, 19, 10)",
      "(20, 10, 13)",
      "(1, 20, 12)",
      "(19, 20, 12)",
      "(12, 20, 19)",
      "(12, 9, 20)",
      "(12, 18, 20)",
      "(14, 2, 20)",
      "(4, 2, 20)",
      "(11, 22, 22)"
    ],
  }, {
    title: "Warmup",
    name: "LoneTeen",
    question: `We'll say that a number is 'teen' if it is in the range 13..19 inclusive.
  Given 2 int values, Output TRUE if one or the other is teen, but not both.`,
    solution: `method LoneTeen(A, B) 
  if A >=13 AND A <=19 AND (B < 13 OR B > 19) then
    output TRUE
  else if (A < 13 OR A > 19) AND B >= 13 AND B <= 19 then
    output TRUE
  else
    output FALSE
  end if
end method`,
    inputs: [
      "(13, 99)",
      "(21, 19)",
      "(13, 13)",
      "(14, 20)",
      "(20, 15)",
      "(16, 17)",
      "(16, 9)",
      "(16, 18)",
      "(13, 19)",
      "(13, 20)",
      "(6, 18)",
      "(99, 13)",
      "(99, 99)"
    ],
  }, {
    title: "Warmup",
    name: "MixStart",
    question: `Output TRUE if the given string begins with 'mix', except the 'm' can be
  anything, so 'pix', '9ix'..all count. You can use the method STRING.SubStr(S,L) to get a substring
  where S is the first index in the substring (first char is 0!) and L is how many chars you want (at max).`,
    solution: `method MixStart(STR) 
  if STR.length < 3 then
    output FALSE
  end if
  TWO = STR.SubStr(1, 2);
  if TWO = 'ix' then
    output TRUE
  else
    output FALSE
  end if
end method`,
    inputs: [
      "('mix snacks')",
      "('pix snacks')",
      "('piz snacks')",
      "('nix')",
      "('ni')",
      "('n')"
    ],
  }, {
    title: "Warmup",
    name: "IntMax",
    question: `Given three int values, A, B, and C, output the largest.`,
    solution: `method IntMax(A, B, C) 
  MAX = 0
  if A > B then
    MAX = A
  else
    MAX = B
  end if
  if C > MAX then
    MAX = C
  end if
  output MAX
end method`,
    inputs: [
      "(1, 2, 3)",
      "(1, 3, 2)",
      "(3, 2, 1)",
      "(9, 3, 3)",
      "(3, 9, 3)",
      "(3, 3, 9)",
      "(8, 2, 3)",
      "(-3, -1, -2)",
      "(6, 2, 5)",
      "(5, 6, 2)",
      "(5, 2, 6)"
    ],
  }, {
    title: "Warmup",
    name: "Close10",
    question: `Given 2 int values, output whichever value is nearest to the value 10,
    or output 0 in the event of a tie.`,
    solution: `method Close10(A, B) 
  ADF = A - 10
  if ADF < 0 then
    ADF = 10 - A
  end if

  BDF = B - 10
  if BDF < 0 then
    BDF = 10 - B
  end if

  if ADF < BDF then
    output A
  else if BDF < ADF then
    output B
  else
    output 0
  end if
end method`,
    inputs: [
      "(8, 13)",
      "(13, 8)",
      "(13, 7)",
      "(7, 13)",
      "(9, 13)",
      "(13, 8)",
      "(10, 12)",
      "(11, 10)",
      "(5, 21)",
      "(0, 20)",
      "(0, 20)",
      "(10, 10)"
    ],
  }, {
    title: "Warmup",
    name: "StringE",
    question: `Output TRUE if the given string contains between 1 and 3 e chars. 
      Hint: the length of a string can be found using the STR.Length() method, and you can access one char
      within a string using brackets, so if ST = "ABC" then ST[1] gives you a B`,
    solution: `method StringE(STR) 
  COUNT = 0
  loop I from 0 to STR.Length()
    if STR[I] = 'e' then
      COUNT = COUNT + 1
    end if
  end loop
  if COUNT >= 1 AND COUNT <= 3 then
    output TRUE
  else
    output FALSE 
  end if
end method`,
    inputs: [
      "('Hello')",
      "('Heelle')",
      "('Heelele')",
      "('HII')",
      "('e')",
      "('')"
    ],
  }, {
    title: "Warmup",
    name: "LastDigit",
    question: `Given two non - negative int values, Output TRUE if they have the same
  last digit, such as with 27 and 57. Note that the mod operator computes
  remainders, so 17 mod 10 is 7.`,
    solution: `method LastDigit(A, B) 
  if A mod 10 = B mod 10 then
    output TRUE
  else
    output FALSE
  end if
end method`,
    inputs: [
      "(7, 17)",
      "(6, 17)",
      "(3, 113)",
      "(114, 113)",
      "(114, 4)",
      "(10, 0)",
      "(11, 0)"
    ],
  }, {
    title: "Warmup",
    name: "EveryNth",
    question: `Given a non - empty string and an int N, output the string made starting
  with char 0, and then every Nth char of the string. So if N is 3, use char 0, 3, 6,
                     ...and so on. N will always be 1 or more.`,
    solution: `method EveryNth(STR, N) 
  RESULT = ""
  COUNT = 0
  loop while COUNT < STR.Length()
    RESULT = RESULT + STR[COUNT]
    COUNT = COUNT + N
  }
  output RESULT
end method`,
    inputs: [
      "('Miracle', 2)",
      "('abcdefg', 2)",
      "('abcdefg', 3)",
      "('Chocolate', 3)",
      "('Chocolates', 3)",
      "('Chocolates', 4)",
      "('Chocolates', 100)"
    ],
  }, {
    title: "Warmup",
    name: "StringTimes",
    question: `Given a string and a non-negative integer N, output a larger string that is N
  copies of the original string.`,
    solution: `method StringTimes(STR, N) 
  FINAL = ""
  loop I from 1 to N 
    FINAL = FINAL + STR
  end loop
  output FINAL
end method`,
    inputs: [
      "('Hi', 2)",
      "('Hi', 3)",
      "('Hi', 1)",
      "('Hi', 0)",
      "('Hi', 5)",
      "('Oh Boy!', 2)",
      "('x', 4)",
      "('', 4)",
      "('code', 2)",
      "('code', 3)"
    ],
  }, {
    title: "Warmup",
    name: "FrontTimes",
    question: `Given a string and a non - negative int n, we'll say that the front of the string is the first 3 chars,
  or whatever is there if the string is less than length 3. Return n copies of the front.`,
    solution: `method FrontTimes(STR, N) 
  FRONT = STR.SubStr(0,3)
  RESULT = ""
  loop X from 1 to N 
    RESULT = RESULT + FRONT
  end loop
  output RESULT
end method`,
    inputs: [
      "('Chocolate', 2)",
      "('Chocolate', 3)",
      "('Abc', 3)",
      "('Ab', 4)",
      "('A', 4)",
      "('',4)",
      "('Abc', 0)"
    ],
  }, {
    title: "Warmup",
    name: "StringBits",
    question: `Given a string, output a new string made of every other char starting
  with the first, so "Hello" yields "Hlo".`,
    solution: `method StringBits(STR) 
  OUT = ""
  X = 0
  loop while X < STR.length
    OUT = OUT + STR.SubStr(X, 1)
    X = X + 2
  end loop
  output OUT
end method`,
    inputs: [
      "('Hello')",
      "('Hi')",
      "('Heeololeo')",
      "('HiHiHi')",
      "('')",
      "('Greetings')",
      "('Chocolate')",
      "('pi')",
      "('Hello Kitten')",
      "('hxaxpxpxy')"
    ],
  }, {
    title: "Warmup",
    name: "StringSplosion",
    question: `Given a non-empty string like "Code" output a string like "CCoCodCode".`,
    solution: `method StringSplosion(str) 
  result = '';
  for (x = 0; x < str.length - 1; x++) {
    result = result + str.substring(0, x + 1);
  }
  return result;
end method`,
    inputs: [
    ],
  }, {
    title: "Warmup",
    name: "Last2",
    question: `Given a string, output the count of the number of times that a substring
  length 2 appears in the string and also as the last 2 chars of the string, so
  "hixxxhi" yields 1(we won't count the end substring).`,
    solution: `method Last2(str) 
  count = 0;
  if str.length < 2 then
    return 0;
  end if
  end = str.substring(str.length - 2);
  for (x = 0; x < str.length - 2; x++) {
    sub = str.substring(x, x + 2);
    if sub = end then
      count++;
    end if
  }
  return count;
end method`,
    inputs: [
      "('hixxhi')",
      "('xaxxaxaxx')",
      "('axxaaxx')",
      "('xxaxxaxxaxx')",
      "('xaxaxaa')",
      "('xxxx')",
      "('13121312')",
      "('11212')",
      "('13121311')",
      "('hi')",
      "('h')",
      "('')"
    ],
  }, {
    title: "Warmup",
    name: "ArrayCount9",
    question: `Given an array of ints, output the number of 9's in the array.`,
    solution: `method ArrayCount9(nums) 
  count = 0;
  for (x = 0; x < nums.length; x++) {
    if nums[x] = 9 then
      count++;
    end if
  }
  return count;
end method`,
    inputs: [
      "([1,2,9])",
      "([1,9,9])",
      "([1,9,9,3,9])",
      "([1,2,3])",
      "([])",
      "([4,2,4,3,1])",
      "([9,2,4,3,1])"
    ],
  }, {
    title: "Warmup",
    name: "ArrayFront9",
    question: `Given an array of ints, Output TRUE if one of the first 4 elements in
            the array is a 9. The array length may be less than 4.`,
    solution: `method ArrayFront9(nums) 
  for (x = 0; x < 4; x++) {
    if nums[x] = 9 then
      output TRUE
    end if
  }
  output FALSE
end method`,
    inputs: [
      "([1,2,9,3,4])",
      "([1,2,3,4,9])",
      "([1,2,3,4,5])",
      "([9,2,3])",
      "([1,9,9])",
      "([1,2,3])",
      "([1,9])",
      "([5,5])",
      "([2])",
      "([9])",
      "([])",
      "([3,9,2,3,3])"
    ],
  }, {
    title: "Warmup",
    name: "Array123",
    question: `Given an array of ints, Output TRUE if the sequence of numbers 1, 2, 3
          appears in the array somewhere.`,
    solution: `method Array123(nums) 
  return !!(nums.join('').match(/123/g));
end method`,
    inputs: [
    ],
  }, {
    title: "Warmup",
    name: "StringMatch",
    question: `Given 2 strings, a and b, output the number of the positions where they contain the same length 2 substring.
            So "xxcaazz" and "xxbaaz" yields 3, since the "xx" "xx", "aa", and "az" substrings appear in the same place in both strings.`,
    solution: `method StringMatch(a, b) 
  len = Math.min(a.length, b.length);
  count = 0;
  for (x = 0; x < len - 1; x++) {
    aSub = a.substring(x, x + 2);
    bSub = b.substring(x, x + 2);
    if aSub = bSub then
      count++;
    end if
  }
  return count;
end method`,
    inputs: [
      "('xxcaazz', 'xxbaaz')",
      "('abc', 'abc')",
      "('abc', 'axc')",
      "('hello', 'he')",
      "('he', 'hello')",
      "('', 'hello')",
      "('aabbccdd', 'abbbxxd')",
      "('aaxxaaxx', 'iaxxai')",
      "('iaxxai', 'aaxxaaxx')"
    ],
  }, {
    title: "Warmup",
    name: "StringX",
    question: `Given a string, output a version where all the "x" have been removed.
              Except an "x" at the very start or end should not be removed.`,
    solution: `method StringX(str) 
  result = '';
  front = str.substring(0, 1);
  end = str.substring(str.length - 1);
  for (i = 1; i < str.length - 1; i++) {
    if str.charAt(i) != 'x' then
      result += str.charAt(i);
    end if
  }
  return front + result + end;
end method`,
    inputs: [
      "('xxHxix')",
      "('abxxxcd')",
      "('xabxxxcdx')",
      "('xKittenx')",
      "('Hello')",
      "('xx')",
      "('x')",
      "('')"
    ],
  }, {
    title: "Warmup",
    name: "AltPairs",
    question: `Given a string, output a string made of the chars at indexes 0,1, 4,5, 8,9 ...
              so "kittens" yields "kien".`,
    solution: `method AltPairs(str) 
  result = '';
  for (x = 0; x < str.length; x += 4) {
    end = x + 2;
    if end > str.length then
      end = str.length;
    end if
    result = result + str.substring(x, end);
  }
  return result;
end method`,
    inputs: [
      "('kitten')",
      "('Chocolate')",
      "('CodingHorror')",
      "('yak')",
      "('ya')",
      "('y')",
      "('')",
      "('ThisThatTheOther')"
    ],
  }, {
    title: "Warmup",
    name: "StringYak",
    question: `Suppose the string "yak" is unlucky. Given a string, output a version
              where all the "yak" are removed, but the "a" can be any char. The "yak" strings
              will not overlap.`,
    solution: `method StringYak(str) 
  result = '';
  for (x = 0; x < str.length; x++) {
    if x + 2 < str.length AND str.charAt(x) = 'y' AND str.charAt(x + 2) = 'k' then
      x = x + 2;
    else
      result = result + str.charAt(x);
    end if
  }
  return result;
end method`,
    inputs: [
      "('yakpak')",
      "('pakyak')",
      "('yak123ya')",
      "('yak')",
      "('yakxxxyak')",
      "('xxcaazz', 'hiyakHi')",
      "('xxxyakyyyakzzz')"
    ],
  }, {
    title: "Warmup",
    name: "Array667",
    question: `Given an array of ints, output the number of times that two 6's
                are next to each other in the array. Also count instances where the second
                "6" is actually a 7.`,
    solution: `method Array667(nums) 
  count = 0;
  for (x = 0; x < nums.length; x++) {
    if nums[x] = 6 then
      if nums[x + 1] = 6 OR nums[x + 1] = 7 then
        count++;
      end if
    end if
  } return count;
end method`,
    inputs: [
      "([6,6,2])",
      "([6,6,2,6])",
      "([6,7,2,6])",
      "([6,6,2,7,6,7])",
      "([1,6,3])",
      "([6,1])",
      "([])",
      "([3,6,7,6])",
      "([3,6,6,7])",
      "([6,3,6,6])",
      "([6,7,6,6])",
      "([1,2,3,5,6])",
      "([1,2,3,6,6])"
    ],
  }, {
    title: "Warmup",
    name: "NoTriples",
    question: `Given an array of ints, we'll say that a triple is a value appearing 3 times
                  in a row in the array. Output TRUE if the array does not contain any triples.`,
    solution: `method NoTriples(nums) 
  for (x = 0; x < nums.length - 2; x++) {
    first = nums[x];
    if first = nums[x + 1] then
      if first = nums[x + 2] then
        output FALSE
      end if
    end if
  } output TRUE
end method`,
    inputs: [
      "([1,1,2,2,1])",
      "([1,1,2,2,2,1])",
      "([1,1,2,2,2,1])",
      "([1,2,1])",
      "([1,1,1])",
      "([1,1])",
      "([1])",
      "([1])",
      "([])"
    ],
  }, {
    title: "Warmup",
    name: "Has271",
    question: `Given an array of ints, Output TRUE if it contains a 2, 7, 1
                  pattern -- a value, followed by the value plus 5, followed by the value
                  minus 1. Additionally the 271 counts even if the "1" differs by 2 or less
                  from the correct value.`,
    solution: `method Has271(nums) 
  return !!(nums.join('').match(/271/g));
end method`,
    inputs: [
      "([1,2,7,1])",
      "([1,2,8,1])",
      "([2,7,1])",
      "([3,8,2])",
      "([2,7,3])",
      "([2,7,4])",
      "([2,7,-1])",
      "([2,7,-2])",
      "([4,5,3,8,0])",
      "([2,7,5,10,4])",
      "([2,7,-2,4,9,3])",
      "([2,7,5,10,1])",
      "([2,7,-2,10,2])"
    ],
  },
];