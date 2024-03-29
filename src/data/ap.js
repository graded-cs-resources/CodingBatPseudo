module.exports = [{
  question: 'Given an array SCORES, output "TRUE" if each score is equal or greater than the one before. The array will be length 2 or more. You can use the property ARR.length to find the length of the array.',
  title: 'AP-1',
  name: 'ScoresIncreasing',
  inputs: [
    "([1, 3, 4])",
    "([1, 3, 2])",
    "([1, 1, 4])",
    "([1, 1, 2, 4, 4, 7])",
    "([1, 1, 2, 4, 3, 7])"
  ]
},
{
  question: 'Given an array of scores, return true if there are scores of 100 next to each other in the array. The array length will be at least 2.',
  title: 'AP-1',
  name: 'scores100',
  inputs: [
    "([1, 100, 100])",
    "([1, 100, 99, 100])",
    "([100, 1, 100, 100])",
    "([100, 1, 100, 1])",
    "([1, 2, 3, 4, 5])",
    "([1, 2, 100, 4, 5])"
  ]
},
{
  question: 'Given an array of scores sorted in increasing order, return true if the array contains 3 adjacent scores that differ from each other by at most 2, such as with {3, 4, 5} or {3, 5, 5}.',
  title: 'AP-1',
  name: 'scoresClump',
  inputs: [
    "([3, 4, 5])",
    "([3, 4, 6])",
    "([1, 3, 5, 5])",
    "([2, 4, 5, 6])",
    "([2, 4, 5, 7])",
    "([2, 4, 4, 7])",
    "([3, 3, 6, 7, 9])",
    "([3, 3, 7, 7, 9])",
    "([4, 5, 8])"
  ]
},
{
  question: 'Given an array of scores, compute the int average of the first half and the second half, and return whichever is larger. We\'ll say that the second half begins at index length/2. The array length will be at least 2. To practice decomposition, write a separate helper method int average(int[] scores, int start, int end) {  which computes the average of the elements between indexes start..end. Call your helper method twice to implement scoresAverage(). Write your helper method after your scoresAverage() method in the JavaBat text area. Normally you would compute averages with doubles, but here we use ints so the expected results are exact.',
  title: 'AP-1',
  name: 'scoresAverage',
  inputs: [
    "([2, 2, 4, 4])",
    "([4, 4, 4, 2, 2, 2])",
    "([3, 4, 5, 1, 2, 3])",
    "([5, 6])",
    "([5, 4])",
    "([5, 4, 5, 6, 2, 1, 2, 3])"
  ]
},
{
  question: 'Given an array of strings, return the count of the number of strings with the given length.',
  title: 'AP-1',
  name: 'wordsCount',
  inputs: [
    "(['a', 'bb', 'b', 'ccc'], 1)",
    "(['a', 'bb', 'b', 'ccc'], 3)",
    "(['a', 'bb', 'b', 'ccc'], 4)",
    "(['xx', 'yyy', 'x', 'yy', 'z'], 1)",
    "(['xx', 'yyy', 'x', 'yy', 'z'], 2)"
  ]
},
{
  question: 'Given an array of strings, return a new array containing the first N strings. N will be in the range 1..length.',
  title: 'AP-1',
  name: 'wordsFront',
  inputs: [
    "(['a', 'b', 'c', 'd'], 1)",
    "(['a', 'b', 'c', 'd'], 2)",
    "(['a', 'b', 'c', 'd'], 3)",
    "(['a', 'b', 'c', 'd'], 4)",
    "(['Hi', 'There'], 1)"
  ]
},
{
  question: 'Given an array of strings, return a new List (e.g. an ArrayList) where all the strings of the given length are omitted. See wordsWithout() below which is more difficult because it uses arrays.',
  title: 'AP-1',
  name: 'wordsWithoutList',
  inputs: [
    "(['a', 'bb', 'b', 'ccc'], 1)",
    "(['a', 'bb', 'b', 'ccc'], 3)",
    "(['a', 'bb', 'b', 'ccc'], 4)",
    "(['xx', 'yyy', 'x', 'yy', 'z'], 1)"
  ]
},
{
  question: 'Given a positive int n, return true if it contains a 1 digit. Note: use % to get the rightmost digit, and / to discard the rightmost digit.',
  title: 'AP-1',
  name: 'hasOne',
  inputs: [
    "(10)",
    "(22)",
    "(220)",
    "(212)",
    "(1)",
    "(9)",
    "(211112)",
    "(121121)",
    "(222222)",
    "(56156)",
    "(56556)"
  ]
},
{
  question: 'We\'ll say that a positive int divides itself if every digit in the number divides into the number evenly. So for example 128 divides itself since 1, 2, and 8 all divide into 128 evenly. We\'ll say that 0 does not divide into anything evenly, so no number with a 0 digit divides itself. Note: use % to get the rightmost digit, and / to discard the rightmost digit.',
  title: 'AP-1',
  name: 'dividesSelf',
  inputs: [
    "(128)",
    "(12)",
    "(120)",
    "(122)",
    "(13)",
    "(32)",
    "(22)",
    "(42)",
    "(212)",
    "(213)",
    "(162)"
  ]
},
{
  question: 'Given an array of positive ints, return a new array of length "count" containing the first even numbers from the original array. The original array will contain at least "count" even numbers.',
  title: 'AP-1',
  name: 'copyEvens',
  inputs: [
    "([3, 2, 4, 5, 8], 2)",
    "([3, 2, 4, 5, 8], 3)",
    "([6, 1, 2, 4, 5, 8], 3)",
    "([6, 1, 2, 4, 5, 8], 4)",
    "([3, 1, 4, 1, 5], 1)",
    "([2], 1)",
    "([6, 2, 4, 8], 2)",
    "([6, 2, 4, 8], 3)",
    "([6, 2, 4, 8], 4)",
    "([1, 8, 4], 1)",
    "([1, 8, 4], 2)",
    "([2, 8, 4], 2)"
  ]
},
{
  question: 'We\'ll say that a positive int n is "endy" if it is in the range 0..10 or 90..100 (inclusive). Given an array of positive ints, return a new array of length "count" containing the first endy numbers from the original array. Decompose out a separate isEndy(int n) method to test if a number is endy. The original array will contain at least "count" endy numbers.',
  title: 'AP-1',
  name: 'copyEndy',
  inputs: [
    "([9, 11, 90, 22, 6], 2)",
    "([9, 11, 90, 22, 6], 3)",
    "([12, 1, 1, 13, 0, 20], 2)",
    "([12, 1, 1, 13, 0, 20], 3)",
    "([0], 1)",
    "([10, 11, 90], 2)",
    "([90, 22, 100], 2)",
    "([12, 11, 10, 89, 101, 4], 1)",
    "([13, 2, 2, 0], 2)",
    "([13, 2, 2, 0], 3)",
    "([13, 2, 13, 2, 0, 30], 2)",
    "([13, 2, 13, 2, 0, 30], 3)"
  ]
},
{
  question: 'Given 2 arrays that are the same length containing strings, compare the 1st string in one array to the 1st string in the other array, the 2nd to the 2nd and so on. Count the number of times that the 2 strings are non-empty and start with the same char. The strings may be any length, including 0.',
  title: 'AP-1',
  name: 'matchUp',
  inputs: [
    "(['aa', 'bb', 'cc'], ['aaa', 'xx', 'bb'])",
    "(['aa', 'bb', 'cc'], ['aaa', 'b', 'bb'])",
    "(['aa', 'bb', 'cc'], ['', '', 'ccc'])",
    "(['', '', 'ccc'], ['aa', 'bb', 'cc'])",
    "(['', '', ''], ['', 'bb', 'cc'])",
    "(['aa', 'bb', 'cc'], ['', '', ''])",
    "(['aa', '', 'ccc'], ['', 'bb', 'cc'])",
    "(['x', 'y', 'z'], ['y', 'z', 'x'])",
    "(['', 'y', 'z'], ['', 'y', 'x'])",
    "(['x', 'y', 'z'], ['xx', 'yyy', 'zzz'])",
    "(['x', 'y', 'z'], ['xx', 'yyy', ''])",
    "(['b', 'x', 'y', 'z'], ['a', 'xx', 'yyy', 'zzz'])",
    "(['aaa', 'bb', 'c'], ['aaa', 'xx', 'bb'])"
  ]
},
{
  question: 'The "key" array is an array containing the correct answers to an exam, like {"a", "a", "b", "b"}. the "answers" array contains a student\'s answers, with "?" representing a question left blank. The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer.',
  title: 'AP-1',
  name: 'scoreUp',
  inputs: [
    "(['a', 'a', 'b', 'b'], ['a', 'c', 'b', 'c'])",
    "(['a', 'a', 'b', 'b'], ['a', 'a', 'b', 'c'])",
    "(['a', 'a', 'b', 'b'], ['a', 'a', 'b', 'b'])",
    "(['a', 'a', 'b', 'b'], ['?', 'c', 'b', '?'])",
    "(['a', 'a', 'b', 'b'], ['?', 'c', '?', '?'])",
    "(['a', 'a', 'b', 'b'], ['c', '?', 'b', 'b'])",
    "(['a', 'a', 'b', 'b'], ['c', '?', 'b', '?'])",
    "(['a', 'b', 'c'], ['a', 'c', 'b'])",
    "(['a', 'a', 'b', 'b', 'c', 'c'], ['a', 'c', 'a', 'c', 'a', 'c'])",
    "(['a', 'a', 'b', 'b', 'c', 'c'], ['a', 'c', '?', '?', 'a', 'c'])",
    "(['a', 'a', 'b', 'b', 'c', 'c'], ['a', 'c', '?', '?', 'c', 'c'])",
    "(['a', 'b', 'c'], ['a', 'b', 'c'])"
  ]
},
{
  question: 'Given an array of strings, return a new array without the strings that are equal to the target string. One approach is to count the occurrences of the target string, make a new array of the correct length, and then copy over the correct strings.',
  title: 'AP-1',
  name: 'wordsWithout',
  inputs: [
    "(['a', 'b', 'c', 'a'], 'a')",
    "(['a', 'b', 'c', 'a'], 'b')",
    "(['a', 'b', 'c', 'a'], 'c')",
    "(['b', 'c', 'a', 'a'], 'b')",
    "(['xx', 'yyy', 'x', 'yy', 'x'], 'x')",
    "(['xx', 'yyy', 'x', 'yy', 'x'], 'yy')",
    "(['aa', 'ab', 'ac', 'aa'], 'aa')"
  ]
},
{
  question: 'Given two arrays, A and B, of non-negative int scores. A "special" score is one which is a multiple of 10, such as 40 or 90. Return the sum of largest special score in A and the largest special score in B. To practice decomposition, write a separate helper method which finds the largest special score in an array. Write your helper method after your scoresSpecial() method in the JavaBat text area.',
  title: 'AP-1',
  name: 'scoresSpecial',
  inputs: [
    "([12, 10, 4], [2, 20, 30])",
    "([20, 10, 4], [2, 20, 10])",
    "([12, 11, 4], [2, 20, 31])",
    "([1, 20, 2, 50], [3, 4, 5])",
    "([3, 4, 5], [1, 50, 2, 20])",
    "([10, 4, 20, 30], [20])",
    "([10, 4, 20, 30], [20])",
    "([10, 4, 20, 30], [3, 20, 99])",
    "([10, 4, 20, 30], [30, 20, 99])",
    "([], [2])",
    "([], [20])",
    "([14, 10, 4], [4, 20, 30])"
  ]
},
{
  question: 'We have an array of heights, representing the altitude along a walking trail. Given start/end indexes into the array, return the sum of the changes for a walk beginning at the start index and ending at the end index. For example, with the heights {5, 3, 6, 7, 2} and start=2, end=4 yields a sum of 1 + 5 = 6. The start end end index will both be valid indexes into the array with start <= end.',
  title: 'AP-1',
  name: 'sumHeights',
  inputs: [
    "([5, 3, 6, 7, 2], 2, 4)",
    "([5, 3, 6, 7, 2], 0, 1)",
    "([5, 3, 6, 7, 2], 0, 4)",
    "([5, 3, 6, 7, 2], 1, 1)",
    "([1, 2, 3, 4, 5, 4, 3, 2, 10], 0, 3)",
    "([1, 2, 3, 4, 5, 4, 3, 2, 10], 4, 8)",
    "([1, 2, 3, 4, 5, 4, 3, 2, 10], 7, 8)",
    "([1, 2, 3, 4, 5, 4, 3, 2, 10], 8, 8)",
    "([1, 2, 3, 4, 5, 4, 3, 2, 10], 2, 2)",
    "([1, 2, 3, 4, 5, 4, 3, 2, 10], 3, 6)",
    "([10, 8, 7, 7, 7, 6, 7], 1, 4)",
    "([10, 8, 7, 7, 7, 6, 7], 1, 5)"
  ]
},
{
  question: '(A variation on the sumHeights problem.) We have an array of heights, representing the altitude along a walking trail. Given start/end indexes into the array, return the sum of the changes for a walk beginning at the start index and ending at the end index, however increases in height count double. For example, with the heights {5, 3, 6, 7, 2} and start=2, end=4 yields a sum of 1*2 + 5 = 7. The start end end index will both be valid indexes into the array with start <= end.',
  title: 'AP-1',
  name: 'sumHeights2',
  inputs: [
    "([5, 3, 6, 7, 2], 2, 4)",
    "([5, 3, 6, 7, 2], 0, 1)",
    "([5, 3, 6, 7, 2], 0, 4)",
    "([5, 3, 6, 7, 2], 1, 1)",
    "([1, 2, 3, 4, 5, 4, 3, 2, 10], 0, 3)",
    "([1, 2, 3, 4, 5, 4, 3, 2, 10], 4, 8)",
    "([1, 2, 3, 4, 5, 4, 3, 2, 10], 7, 8)",
    "([1, 2, 3, 4, 5, 4, 3, 2, 10], 8, 8)",
    "([1, 2, 3, 4, 5, 4, 3, 2, 10], 2, 2)",
    "([1, 2, 3, 4, 5, 4, 3, 2, 10], 3, 6)",
    "([10, 8, 7, 7, 7, 6, 7], 1, 4)",
    "([10, 8, 7, 7, 7, 6, 7], 1, 5)"
  ]
},
{
  question: '(A variation on the sumHeights problem.) We have an array of heights, representing the altitude along a walking trail. Given start/end indexes into the array, return the number of "big" steps for a walk starting at the start index and ending at the end index. We\'ll say that  step is big if it is 5 or more up or down. The start end end index will both be valid indexes into the array with start <= end.',
  title: 'AP-1',
  name: 'bigHeights',
  inputs: [
    "([5, 3, 6, 7, 2], 2, 4)",
    "([5, 3, 6, 7, 2], 0, 1)",
    "([5, 3, 6, 7, 2], 0, 4)",
    "([5, 3, 6, 7, 3], 0, 4)",
    "([5, 3, 6, 7, 2], 1, 1)",
    "([5, 13, 6, 7, 2], 1, 2)",
    "([5, 13, 6, 7, 2], 0, 2)",
    "([5, 13, 6, 7, 2], 1, 4)",
    "([5, 13, 6, 7, 2], 0, 4)",
    "([5, 13, 6, 7, 2], 0, 3)",
    "([1, 2, 3, 4, 5, 4, 3, 2, 10], 0, 3)",
    "([1, 2, 3, 4, 5, 4, 3, 2, 10], 4, 8)",
    "([1, 2, 3, 14, 5, 4, 3, 2, 10], 0, 3)",
    "([1, 2, 3, 14, 5, 4, 3, 2, 10], 7, 8)",
    "([1, 2, 3, 14, 5, 4, 3, 2, 10], 3, 8)",
    "([1, 2, 3, 14, 5, 4, 3, 2, 10], 2, 8)"
  ]
},
{
  question: 'We have data for two users, A and B, each with a String name and an int id. The goal is to order the users such as for sorting. Return -1 if A comes before B, 1 if A comes after B, and 0 if they are the same. Order first by the string names, and then by the id numbers if the names are the same. Note: with Strings str1.compareTo(str2) returns an int value which is negative/0/positive to indicate how str1 is ordered to str2 (the value is not limited to -1/0/1). (On the AP, there would be two User objects, but here the code simply takes the two strings and two ints directly. The code logic is the same.)',
  title: 'AP-1',
  name: 'userCompare',
  inputs: [
    "('bb', 1, 'zz', 2)",
    "('bb', 1, 'aa', 2)",
    "('bb', 1, 'bb', 1)",
    "('bb', 5, 'bb', 1)",
    "('bb', 5, 'bb', 10)",
    "('adam', 1, 'bob', 2)",
    "('bob', 1, 'bob', 2)",
    "('bzb', 1, 'bob', 2)"
  ]
},
{
  question: 'Start with two arrays of strings, A and B, each with its elements in alphabetical order and without duplicates. Return a new array containing the first N elements from the two arrays. The result array should be in alphabetical order and without duplicates. A and B will both have a length which is N or more. The best "linear" solution makes a single pass over A and B, taking advantage of the fact that they are in alphabetical order, copying elements directly to the new array.',
  title: 'AP-1',
  name: 'mergeTwo',
  inputs: [
    "(['a', 'c', 'z'], ['b', 'f', 'z'], 3)",
    "(['a', 'c', 'z'], ['c', 'f', 'z'], 3)",
    "(['f', 'g', 'z'], ['c', 'f', 'g'], 3)",
    "(['a', 'c', 'z'], ['a', 'c', 'z'], 3)",
    "(['a', 'b', 'c', 'z'], ['a', 'c', 'z'], 3)",
    "(['a', 'c', 'z'], ['a', 'b', 'c', 'z'], 3)",
    "(['a', 'c', 'z'], ['a', 'c', 'z'], 2)",
    "(['a', 'c', 'z'], ['a', 'c', 'y', 'z'], 3)",
    "(['x', 'y', 'z'], ['a', 'b', 'z'], 3)"
  ]
},
{
  question: 'Start with two arrays of strings, a and b, each in alphabetical order, possibly with duplicates. Return the count of the number of strings which appear in both arrays. The best "linear" solution makes a single pass over both arrays, taking advantage of the fact that they are in alphabetical order.',
  title: 'AP-1',
  name: 'commonTwo',
  inputs: [
    "(['a', 'c', 'x'], ['b', 'c', 'd', 'x'])",
    "(['a', 'c', 'x'], ['a', 'b', 'c', 'x', 'z'])",
    "(['a', 'b', 'c'], ['a', 'b', 'c'])",
    "(['a', 'a', 'b', 'b', 'c'], ['a', 'b', 'c'])",
    "(['a', 'a', 'b', 'b', 'c'], ['a', 'b', 'b', 'b', 'c'])",
    "(['a', 'a', 'b', 'b', 'c'], ['a', 'b', 'b', 'c', 'c'])",
    "(['b', 'b', 'b', 'b', 'c'], ['a', 'b', 'b', 'b', 'c'])",
    "(['a', 'b', 'c', 'c', 'd'], ['a', 'b', 'b', 'c', 'd', 'd'])",
    "(['a', 'a', 'b', 'b', 'c'], ['b', 'b', 'b'])",
    "(['a', 'a', 'b', 'b', 'c'], ['c', 'c'])",
    "(['a', 'a', 'b', 'b', 'c'], ['b', 'b', 'b', 'x'])",
    "(['a', 'a', 'b', 'b', 'c'], ['b', 'b'])",
    "(['a'], ['a', 'b'])",
    "(['a'], ['b'])",
    "(['a', 'a'], ['b', 'b'])",
    "(['a', 'b'], ['a', 'b'])"
  ]
}
];

