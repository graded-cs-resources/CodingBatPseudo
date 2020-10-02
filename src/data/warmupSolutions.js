/**---Solutions--- **/
// Warmup-1

const { theEnd } = require("./stringSolutions");

let solutions = {};

solutions.SleepIn = `method sleepIn(WEEKDAY, VACATION)
  if NOT WEEKDAY OR VACATION then
    output "TRUE"
  else
    output "FALSE"
  end if
end method`;

solutions.MonkeyTrouble = `method MonkeyTrouble(ASMILE, BSMILE)
  if (ASMILE AND BSMILE) OR (NOT ASMILE AND NOT BSMILE) then
  // alternative: if ASMILE = BSMILE then
    output "TRUE"
  else
    output "FALSE"
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

solutions.ParrotTrouble = `method ParrotTrouble(TALKING, HOUR)
  if TALKING AND (HOUR < 7 OR HOUR > 20) then
    output "TRUE"
  else 
    output "FALSE"
  end if
end method`;

solutions.Makes10 = `method Makes10(A, B)
  if A = 10 OR B = 10 OR (A + B = 10) then
    output "TRUE"
  else
    output "FALSE"
  end if
end method`;

solutions.NearHundred = `method nearHundred(N) 
  if (100 - N) >= -10 AND (100 - N) <= 10 then
    output "TRUE"
  else if (200 - N) >= -10 AND (200 - N) <= 10 then
    output "TRUE"
  else
    output "FALSE"
  end if
end method`;

solutions.NotString = `method NotString(STR)
  if STR.SubStr(0,3) = "not" then
    output STR
  else 
    output "not"+ STR
  end if
end method`;

solutions.Front3 = `method Front3(STR) 
  FRONT = STR.SubStr(0,3)
  output FRONT + FRONT + FRONT
end method`;

solutions.Or35 = `method Or35(n) 
  if n mod 3 = 0 OR n mod 5 = 0 then 
    output "TRUE"
  else
    output "FALSE"
  end if
end method`;

solutions.Front22 = `method Front22(STR) 
  take = 2;
  if take > str.length then
    take = str.length;
  }
  front = str.substring(0, take);
  return front + str + front;
end method`;

solutions.PosNeg = `method PosNeg(A, B, NEGATIVE) 
  if NEGATIVE then
    if A < 0 AND B < 0 then
      output "TRUE"
    else
      output "FALSE
    end if
  end if
  if (A < 0 AND B > 0) OR (A > 0 AND B < 0) then
    output "TRUE"
  else
    output "FALSE"
  }
end method`;

solutions.StartHi = `method StartHi(STR) 
  front = STR.SubStr(0,2);
  if front = 'hi' then
    output "TRUE"
  else
    output "FALSE"
  end if
end method`;

solutions.IcyHot = `method IcyHot(temp1, temp2) 
  if temp1 < 0 AND temp2 > 100 OR temp2 < 0 AND temp1 > 100 then
    output "TRUE"
  end if
  output "FALSE"
end method`;

solutions.In1020 = `method In1020(A, B) 
  if (A >= 10 AND A <= 20) OR (B >= 10 AND B <= 20) then
    output "TRUE"
  else
    output "FALSE"
  end if
end method`;

solutions.HasTeen = `method HasTeen(A, B, C) 
  if (A >= 13 AND A <= 19) OR (B >= 13 AND B <= 19) OR (C >= 13 AND C <= 19) then
    output "TRUE"
  else
    output "FALSE"
  end if
end method`;

solutions.LoneTeen = `method LoneTeen(A, B) 
  if A >=13 AND A <=19 AND (B < 13 OR B > 19) then
    output "TRUE"
  else if (A < 13 OR A > 19) AND B >= 13 AND B <= 19 then
    output "TRUE"
  else
    output "FALSE"
  end if
end method`;

solutions.MixStart = `method MixStart(STR) 
  if STR.length < 3 then
    output "FALSE"
  end if
  TWO = STR.SubStr(1, 2);
  if TWO = 'ix' then
    output "TRUE"
  else
    output "FALSE"
  end if
end method`;

solutions.IntMax = `method IntMax(A, B, C) 
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
end method`;

solutions.Close10 = `method Close10(A, B) 
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
end method`;

solutions.StringE = `method StringE(STR) 
  COUNT = 0
  loop I from 0 to STR.Length()
    if STR[I] = 'e' then
      COUNT = COUNT + 1
    end if
  end loop
  if COUNT >= 1 AND COUNT <= 3 then
    output "TRUE"
  else
    output "FALSE" 
  end if
end method`;

solutions.LastDigit = `method LastDigit(A, B) 
  if A mod 10 = B mod 10 then
    output "TRUE"
  else
    output "FALSE"
  end if
end method`;

solutions.EveryNth = `method EveryNth(STR, N) 
  RESULT = ""
  COUNT = 0
  loop while COUNT < STR.Length()
    RESULT = RESULT + STR[COUNT]
    COUNT = COUNT + N
  }
  output RESULT
end method`;

solutions.StringTimes = `method StringTimes(STR, N) 
  let finalStr = ""
  loop I from 1 to N 
    finalStr = finalStr + STR
  end loop
  output finalStr
end method`;

solutions.FrontTimes = `method FrontTimes(STR, N) 
  FRONT = STR.SubStr(0,3)
  RESULT = ""
  loop X from 1 to N 
    RESULT = RESULT + FRONT
  end loop
  output RESULT
end method`;

/***** Start un-edited ones */

solutions.DelDel = `method DelDel(str) 
  if str.length < 4 then
    return str;
  end if
  let output = str;
  if str.substring(1, 4) = 'del' then
    output = str.substring(0, 1) + str.substring(4, str.length);
  end if
  return output;
end method`;

solutions.Max1020 = `method Max1020(a, b) 
  method between1020(num)
    return num >= 10 AND num <= 20;
  end method
  let result = 0;
  if between1020(a) then
    result = a;
  end if
  if b > result AND between1020(b) then
    result = b;
  end if
  return result;
end method`;

solutions.EndUp = `method EndUp(str) 
  if str.length <= 3 then
    return str.toUpperCase();
  end if
  cut = str.length - 3;
  front = str.substring(0, cut);
  back = str.substring(cut);

  return front + back.toUpperCase();
end method`;

solutions.DoubleX = `method DoubleX(str) 
  str.toLowerCase();
  x = str.indexOf('x');
  if x = -1 then
    output "FALSE"
  end if
  if x >= str.length then
    output "FALSE"
  end if
  return str.substring(x + 1, x + 2) = 'x';
end method`;

solutions.Last2 = `method Last2(str) 
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
end method`;

solutions.Array123 = `method Array123(nums) 
  return !!(nums.join('').match(/123/g));
end method`;

solutions.AltPairs = `method AltPairs(str) 
  result = '';
  for (x = 0; x < str.length; x += 4) {
    end = x + 2;
    if end > str.length then
      end = str.length;
    end if
    result = result + str.substring(x, end);
  }
  return result;
end method`;

solutions.NoTriples = `method NoTriples(nums) 
  for (x = 0; x < nums.length - 2; x++) {
    first = nums[x];
    if first = nums[x + 1] then
      if first = nums[x + 2] then
        output "FALSE"
      end if
    end if
  } output "TRUE"
end method`;

solutions.StringBits = `method StringBits(str) 
  result = '';
  for (x = 0; x < str.length; x += 2) {
    result = result + str.substring(x, x + 1);
  }
  return result;
end method`;

solutions.ArrayCount9 = `method ArrayCount9(nums) 
  count = 0;
  for (x = 0; x < nums.length; x++) {
    if nums[x] = 9 then
      count++;
    end if
  }
  return count;
end method`;

solutions.StringMatch = `method StringMatch(a, b) 
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
end method`;

solutions.StringYak = `method StringYak(str) 
  result = '';
  for (x = 0; x < str.length; x++) {
    if x + 2 < str.length AND str.charAt(x) = 'y' AND str.charAt(x + 2) = 'k' then
      x = x + 2;
    else
      result = result + str.charAt(x);
    end if
  }
  return result;
end method`;

solutions.Has271 = `method Has271(nums) 
  return !!(nums.join('').match(/271/g));
end method`;

solutions.CountXX = `method CountXX(str) 
  count = 0;
  for (x = 0; x < str.length; x++) {
    if str.charAt(x) = 'x' then
      if str.charAt(x + 1) = 'x' then
        count++;
      end if
    end if
  }
  return count++;
end method`;

solutions.StringSplosion = `method StringSplosion(str) 
  result = '';
  for (x = 0; x < str.length - 1; x++) {
    result = result + str.substring(0, x + 1);
  }
  return result;
end method`;

solutions.ArrayFront9 = `method ArrayFront9(nums) 
  for (x = 0; x < 4; x++) {
    if nums[x] = 9 then
      output "TRUE"
    end if
  }
  output "FALSE"
end method`;

solutions.StringX = `method StringX(str) 
  result = '';
  front = str.substring(0, 1);
  end = str.substring(str.length - 1);
  for (i = 1; i < str.length - 1; i++) {
    if str.charAt(i) != 'x' then
      result += str.charAt(i);
    end if
  }
  return front + result + end;
end method`;

solutions.Array667 = `method Array667(nums) 
  count = 0;
  for (x = 0; x < nums.length; x++) {
    if nums[x] = 6 then
      if nums[x + 1] = 6 OR nums[x + 1] = 7 then
        count++;
      end if
    end if
  } return count;
end method`;

module.exports = solutions;