module.exports = [
  {
    title: 'Collections',
    name: 'Count7s',
    inputType: "collection",
    inputs: [
      '({1, 2, 6})',
      '({3, 7, 7})',
      `({8, 11, 7, 3, 7})`,
      `({7, 7, 7, 7})`,
      `({7.2, 11, 3})`,
      '({2, 7, 2, 11, 7, 24, 7})'
    ],
    // The question itself. Try to make it Pseudocode-y
    question: `Given a collection of numbers, count and then output how many 7s appear in the collection.`,
    solution: `method Count7s(NUMS)
    COUNT = 0
    NUMS.resetNext()
    loop while NUMS.hasNext()
      N = NUMS.getNext()
      if N = 7 then
        COUNT = COUNT + 1
      end if
    end loop
    
    output COUNT
  end method`,
  }, {
    title: 'Collections',
    name: 'NegativeOnetoOne',
    inputType: "collection",
    inputs: [
      '({0.3, 1, -0.7, 2.3, 0.2, 5.3})',
      '({1.1, 0.99, 1.0})',
      `({0.2, 0.3, 0.4, -0.2, -0.3, -0.4})`,
      `({2, -2, 3, -3, 4, -4})`,
      `({.2, -0.2, 0.3, -0.3, 0.4, -0.4})`,
    ],
    // The question itself. Try to make it Pseudocode-y
    question: `Given a collection of real numbers, count how many elements are in the interval [-1, 1] inclusive. Output the count. (IB November 2018, question 8d)`,
    solution: `method NegativeOnetoOne(NUMS)
    COUNT = 0
    NUMS.resetNext()
    loop while NUMS.hasNext()
      N = NUMS.getNext()
      if N >= -1 AND N <= 1 then
        COUNT = COUNT + 1
      end if
    end loop
    output COUNT
  end method`,
  },
  {title: "Collections",
    name: "Double100s",
    inputType: "collection",
    inputs: [
      "({100, 100, 40, 20})",
      "({78, 102, 98, 104, 23})",
      "({13, 203, 101, 29, 54, 11, 201})"
    ],
    question: "Given a collection of scores, output TRUE if there are two scores of at least 100 next to each other in the collection. Otherwise, output FALSE.",
    solution:`method Double100s(SCORES)
  COUNT = 0
  SCORES.resetNext()
  loop while SCORES.hasNext() and COUNT < 2
    N = SCORES.getNext()
    if N < 100 then
      COUNT = 0
    else
      COUNT = COUNT + 1
    end if
  end loop
  if COUNT >= 2 then
    output TRUE
  else
    output FALSE
  end if
end method`
  },
  {
    title: 'Collections',
    name: 'CountAs',
    inputType: "collection",
    inputs: [
      '({"abc", "ABC", "CBA", "cba", "bcbcbc"})',
      '({"bb","aa","AB","BA"})',
      '({"bat", "abacus"})'
    ],
    // The question itself. Try to make it Pseudocode-y
    question: `Given a collection of strings, count all the strings whose first letter is "a" of "A" and output the count. You can use the STR.SubStr(i, c) method (look at the reference linked above).`,
    solution: `method CountAs(WORDS)
  COUNT = 0
  WORDS.resetNext()
  loop while WORDS.hasNext()
    W = WORDS.getNext()
    if W.SubStr(0,1) = "a" OR W.SubStr(0,1) = "A" then
      COUNT = COUNT + 1
    end if
  end loop
  
  output COUNT
end method`,
  },
  {
    title: "Collections",
    name: "SearchCollection",
    inputType: "collection",
    inputs: [
      '({1, 22, 34, 1}, 2)',
      '({"Bob", "Joe", "Maria", "Ephraim"},"Maria")',
      '({"A","B","C","C","C","D"},"E"})'
    ],
    question: "Given a collection COL and an variable S, search COL for an element whose value equals S. If the item exists in the collection, output TRUE, otherwise output FALSE.",
    solution: `method SearchCollection(COL, S) 
  COL.resetNext()
  FOUND = FALSE
  loop while COL.hasNext() and not FOUND
    if COL.getNext() = S then
      FOUND = TRUE
    end if
  end loop
  output FOUND
end method`
  },
  {
    title: 'Collections',
    name: 'SumCollection',
    inputType: "collection",
    inputs: [
      '({1, 2, 3})',
      '({5, 11, 2, -3})',
      '({7, 0, 0, -7})',
      '({1, 2, 1, 1, 2})',
      '({1, 1, 1, 1})',
      '({2, 7, 2, 103})',
    ],
    question: 'Given a Collection of numbers, output the sum of all the elements.',
    solution: `method SumCollection(NUMS)
    SUM = 0
    NUMS.resetNext()
    loop while NUMS.hasNext()
      N = NUMS.getNext()
      SUM = SUM + N
    end loop
    output SUM
  end method`
  },
  {
    title: 'Collections',
    name: 'AverageCollection',
    inputType: "collection",
    inputs: [
      '({1, 2, 3, 4, 5})',
      '({5, 11, 2, -8, 0})',
      '({7, 0, 0, -1, -1})',
      '({1, 2, 1, 2, 1})',
      '({1, 1, 1, 1, 1})',
      '({2, 7, 2})',
    ],
    question: 'Given a Collection of numbers, return the mean (average) of all the elements.',
    solution: `method AverageCollection(NUMS)
    SUM = 0
    COUNT = 0
    NUMS.resetNext()
    loop while NUMS.hasNext()
      N = NUMS.getNext()
      COUNT = COUNT + 1
      SUM = SUM + N
    end loop
    output (SUM / COUNT)
  end method`
  },
  {
    title: 'Collections',
    name: 'AverageCollectionInRange',
    inputType: "collection",
    inputs: [
      '({1, 2, 3, 4, 5})',
      '({5, 11, 12, -8, 0})',
      '({-3, 11, 15})',
      '({7, 0, 0, -1, -1})',
      '({1, 12, 1, 22, 1})',
      '({1, 10, 100, 1, 1})',
      '({-2, 7, 2})',
    ],
    question: 'Given a Collection of numbers, output the average of all values between 0 and 10 inclusive. Ignore all other values. If no such values exist, output 0.',
    solution: `method AverageCollectionInRange(NUMS)
    SUM = 0
    COUNT = 0
    NUMS.resetNext()
    loop while NUMS.hasNext()
      N = NUMS.getNext()
      if N >= 0 AND N <= 10 then
        COUNT = COUNT + 1
        SUM = SUM + N
      end if
    end loop
    if COUNT = 0 then
      output 0
    else
      output (SUM / COUNT)
    end if
  end method`
  },
  {
    title: 'Collections',
    name: 'CountAM',
    inputType: "collection",
    inputs: [
      '({"Smith, Jane","Brown, James"})',
      '({"Duckworth, Eliza", "Altman, Phil"})',
      '({"Mizrahi, Marina", "Nelson, Judd"})',
      '({"A, B", "C, D", "M, N", "P, J", "Q, Z"})'
    ],
    question: `<p>Given a collection of names in the form "Last, First", output the number of names whose last name starts with a letter between A and M in the English alphabet.</p>

    <p>You can assume you have access to a method called <code>Compare(STR1, STR2)</code> that returns <code>0</code> if the two strings are identical, <code>-1</code> if <code>STR1</code> is earlier than <code>STR2</code> in the alphabet, and <code>1</code> if <code>STR1</code> is later than <code>STR2</code> in the alphabet.</p>`,
    solution: `method CountAM(NAMES)
  AM = 0
  NAMES.resetNext()
  loop while NAMES.hasNext()
    N = NAMES.getNext()
    if Compare(N, "N") = -1 then
      AM = AM + 1
    end if
  end loop
  output AM
end method`,
    preamble: `function Compare(str1, str2) { return str1.localeCompare(str2) }`,
  },
  {
    title: 'Collections',
    name: 'RotateLeftCollection',
    inputType: "collection",
    inputs: [
      '({1, 2, 3, 4, 5})',
      '({5, 11, 2, -8, 0})',
      '({7, 0, 0, -1, -1})',
      '({1, 2, 1, 2, 1})',
      '({1, 1, 1, 1, 1})',
      '({2, 7, 2})',
    ],
    question: `Given an collection of numbers, create a new collection that is the same thing, but with the first element moved to the back. If the original collection is empty, return an empty collection. You can make an empty collection using the command "C = new Collection()"`,
    solution: `method RotateLeftCollection(NUMS)
    C = new Collection()
    if NOT NUMS.isEmpty() then
      FIRST = NUMS.getNext()
      loop while NUMS.hasNext()
        C.addItem(NUMS.getNext())
      end loop
      C.addItem(FIRST)
    end if
    output C  
  end method`
  },
  {
    title: 'Collections',
    name: 'WeightedAverage',
    inputType: "collection",
    inputs: [
      '({17,23,11},{0.2,0.6,0.2})',
      '({11,15,18,18},{1,2,3,4})',
      '({18,12,5,5},{0.2,0.4,0.6,0.1})',
      '({11,12,13,14,15,16,16},{0.25,0.25,0.35,0.15,0.1,0.05,0.05})'
    ],
    // The question itself. Try to make it Pseudocode-y
    question: `Given two collections, VALUES and WEIGHTS, output a weighted average. A weighted average is calculated by multiplying each number in the VALUES colllection by its related value in the WEIGHTS collection and summing up the result, then dividing that by the sum of the WEIGHTS values only. You can assume VALUES and WEIGHTS are the same lengths.`,
    solution: `method WeightedAverage(VALUES,WEIGHTS)
  WEIGHTSUM = 0
  TOTALSUM = 0
  VALUES.resetNext()
  WEIGHTS.resetNext()
  loop while VALUES.hasNext()
    V = VALUES.getNext()
    W = WEIGHTS.getNext()
    TOTALSUM = TOTALSUM + W * V
    WEIGHTSUM = WEIGHTSUM + W
  end loop
  output TOTALSUM / WEIGHTSUM
end method`,
  },
  {
    title: 'Collections',
    name: 'CollectionToArray',
    inputType: "collection",
    inputs: [
      '({"Coelho", "Ivana", "Huang", "Victor", "Anderson", "Ingerlis"})',
      '({2,3,4,1,2,3,6,4,7,5,7,-1})',
      '({-1, -2, 1.2, 66.3, -22, 1, 5, 77.6, 2})',
      '({true, false, false, false, true, true, true, false, false, false})',
      '({"A","B","C","D","E","F","G","H","I","J","K","L"})',
    ],
    question: `You have a collection called COL that contains an unknown number of elements. Create and output array with all of the elements. The array should not be bigger than necessary.`,
    solution: `method CollectionToArray(COL)
    COL.resetNext()
    N = 0
    loop while COL.hasNext()
      N = N + 1
      COL.getNext()
    end loop
    ARR = new Array(N)
    COL.resetNext()
    loop I from 0 to N-1
      ARR[I] = COL.getNext()
    end loop
    output ARR
  end method`
  },
  {
    title: 'Collections',
    name: 'CollectionToTwoArrays',
    inputType: "collection",
    inputs: [
      '({"Coelho", "Ivana", "Huang", "Victor", "Anderson", "Ingerlis"})',
      '({"Lee", "Stefan", "Protasio", "Ricardo", "Stark", "Rome"})',
      '({"Merchor", "Maia", "Solamao", "Lucas", "Duran", "Rafael"})',
      '({"Scroffa", "Mateo", "Lima", "Joao", "Vidigal", "Eduardo"})',
    ],
    question: `You have a collection called NAMES that contains the names of three students in your class organized in the format Last -> First -> Last -> First (see examples below). Create two arrays, one with the first names and one with the last names. Output the first names, then the last names.`,
    solution: `method CollectionToArrays(NAMES)
    FIRSTS = new Array(3)
    LASTS = new Array(3)
    I = 0
    NAMES.resetNext()
    loop while NAMES.hasNext()
      LASTS[I] = NAMES.getNext()
      FIRSTS[I] = NAMES.getNext()
      I = I + 1
    end if
    output FIRSTS
    output LASTS  
  end method`
  },
  {
    title: 'Collections',
    name: 'PiecewiseProduct',
    inputType: "collection",
    inputs: [
      '({2, 3, 5, 6}, {3, 4, 1, 2})',
      '({1.2, 3.4, -2, 4}, {6.2, 8.9, 11, 2})',
      '({0, 0, 0, 0, 0, 0}, {1, 1, 1, 1, 1, 1})'
    ],
    question: "(Submitted by Emily Canar, '25) Given two collections, NUMS1 and NUMS2 that are the same length, create and output a new collection that contains the element-by-element product of NUMS1 and NUMS2. For example, if the first element of NUMS1 is 2 and the first element of NUMS2 is 3, then the first element of your collection should be 6.",
    solution: `method PiecewiseProduct(NUMS1, NUMS2)
    COL = new Collection()
    NUMS1.resetNext()
    NUMS2.resetNext()
    loop while NUMS1.hasNext()
      F = NUMS1.getNext()
      D = NUMS2.getNext()
      PROD = F * D
      COL.addItem(PROD)
    end loop
    output COL
  end method`
  },
  {title: 'Collections',
    name:'ProdIndex',
    inputType:'collection',
    inputs:[
      '({3, 2, 1, 7, 8, 4})',
      '({4.3, 5.9, -1.2, 3.4, 9})',
      '({1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1})',
      '({2, 2, 2, 3})'
    ],
    question: '(Contributed Lucas Kenzo Odo Toledo de Barros) Given a collection of numbers, return a collection of the product of each number with its array-style "index"= for example, the first element\'s index will be 0, so the first element of your result will be 0.',
    solution: `method ProdIndex(NUMS)
    PRODS = new Collection()
    NUMS.resetNext()
    I = 0
    loop while NUMS.hasNext()
      N = NUMS.getNext() * I
      I = I + 1
      PRODS.addItem(N)
    end loop
    output PRODS
  end method`
  },
  {title: 'Collections',
    name:'FirstMiddleLast',
    inputType:'collection',
    inputs:[
      '({"appl","obamas","oldo"})',
      '({"barb","meet","fork"})',
      '({"hi","aaaaaaaaaaaa", "monster"})',
    ],
    question: '(Contributed Caster Choi) Given a collection of Strings, count how many of the strings have either the same first and last letter OR have the same two middle letters. You can assume the strings will have an even number of letters.',
    solution: `method FirstMiddleLast(STRINGS)
    COUNT = 0
    STRINGS.resetNext()
    loop while STRINGS.hasNext()
      S = STRINGS.getNext()
      if S.SubStr(0,1) == S.SubStr(S.length - 1,1) or S.SubStr((S.length - 2) / 2,1) == S.SubStr(S.length / 2, 1) then
        COUNT = COUNT + 1
      end if
    end loop
    output COUNT
  end method`
  },
  {
    title: 'Collections',
    name:'EvensMinus1',
    inputType:'collection',
    inputs:[
      '({2, 1, 3, 7})',
      '({2, 2, 2})',
      '({3, 2, 1, 7, 8, 4})',
      '({4, 5, -2, 4, 9})',
      '({1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1})',
      '({2, 2, 2, 3})'
    ],
    question: '(Contributed by Victoria Gubessi Franchi Pinto Ribas, class of \'25) Given a collectino of numbers, find the average of one less than all even numbers. Ignore odd numbers.',
    solution: `method EvensMinus1(NUMS)
    SUM = 0
    COUNT = 0
    loop while NUMS.hasNext()
      N = NUMS.getNext()
      if N mod 2 = 0 then
        SUM = SUM + N - 1
        COUNT = COUNT + 1
      end if
    end loop
    output SUM / COUNT
  end method`
  },
  {
    title: 'Collections',
    name:'CollectionStory',
    inputType:'collection',
    inputs: [
      '({"Once upon a time","There was an ogre.", "There was a princess.","There was a donkey.","They lived happily after."},{TRUE,FALSE,TRUE,TRUE})',
      '({"A","B","C","D","E","F"},{TRUE, TRUE, FALSE, FALSE, TRUE, TRUE})',
      '({"Luca","Odo","Victoria","Caster","Chloe","Marino"},{TRUE, TRUE, TRUE, TRUE, FALSE, FALSE})'
    ],
    question: '(Contributed by Luca Seltzer, class of \'25) Given a collection of Strings called STORYBITS and a collection of booleans called HAPPENED (same length), create and output a string for the story preview. That is, if the boolean is TRUE, append the associated story bit, otherwise skip it.',
    solution: `method CollectionStory(STORYBITS, HAPPENED)
    REALSTORY = ""
    HAPPENED.resetNext()
    STORYBITS.resetNext()
    loop while HAPPENED.hasNext()
      STR = STORYBITS.getNext()
      BOOL = HAPPENED.getNext()
      if BOOL then
        REALSTORY = REALSTORY + STR
      end if
    end loop
    output REALSTORY
  end method`
  },
  {
    title: 'Collections',
    name: 'MaxPerIndex',
    inputType: 'collection',
    inputs: [
      '({1,2,7},{3,2,4})',
      '({1,7,10,14,24,4,2,9},{9, 60, 3, 5, 5, 4, 8, 2})',
      '({2.3, -1.7, 9.3, 5.2, -11}, {4.9, -3.2, 9.3, -5.1, 5})',
      '({0, 0, 0},{2, -2, 2})'
    ],
    question: "(Contributed by Rafael Leme, '25) Given two parallel collections of numbers, create and output a new array where each index holds the greatest value at that same position between the two collections. For example, if the first element of the first collection is 2, and the first element of the second collection is 5, the first element of the array should be 5. If the two values are the same, the array should put 0 in the corresponding position.",
    solution: `method MaxPerIndex(COL1, COL2)
    COL1.resetNext()
    COL2.resetNext()
    AMOUNT = 0
    loop while COL1.hasNext()
      COL1.getNext()
      AMOUNT = AMOUNT + 1
    end loop
    COL1.resetNext()
    A = new Array(AMOUNT)
    I = 0
    loop while COL1.hasNext()
      U = COL1.getNext()
      V = COL2.getNext()
      if U = V then
        A[I] = 0
      else if U > V then
        A[I] = U
      else
        A[I] = V
      end if
      I = I +1
    end loop
    output A
  end method`
  },{
    title: "Collections",
    name: "MinimumAge",
    inputType: "collection",
    inputs: [
      "({12, 14, 54, 3})",
      "({72, 9, 2, 51, 67, 67, 67})",
      "({23, 65, 32, 19, 11})"
    ],
    question: "(Contributed by Thayná Araújo Dantas Henrique `25 and Yoon Jieun `25) Given a collection of numbers called AGES that represents the various ages of members of a family, output the age of the youngest member of the family.",
    solution: `method MinimumAge(AGES)
    AGES.resetNext()
    SMALLN = AGES.getNext()
    loop while AGES.hasNext()
      N = AGES.getNext()
      if N < SMALLN then
        SMALLN = N
      end if
    end loop
    output SMALLN
  end method`
  }
]

