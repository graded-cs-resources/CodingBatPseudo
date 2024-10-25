module.exports = [
  {
    //title is the category it appears in on the homepage
    title: '2D Arrays',
    // Pseudocode problems should start with a capital letter
    name: '2dArrayPrintAll',

    inputs: [
      `([[1, 2, 3],[4, 5, 6],[7, 8, 9]])`,
      '([[2, 3], [6, 4]])',
      '([["a", "b", "c"],["A", "B", "C"], ["α","β", "ç"]])',
      '([[13, 6], [1, 2], [4, 6]])',
      '([[3, 2, 1, 4],[1, 1, 1, 1], [3, 1, -3, 1], [4, 4, 2, 4]])',
    ],
    // The question itself. Try to make it Pseudocode-y
    question: `Given a two - dimensional array ARR, output each element of the array on its own line. 
    At the end of each row, output the phrase END ROW. `,

    solution: `method PrintAll(ARR)
  loop R from 0 to ARR.Length() - 1
    loop C from 0 to ARR[R].Length() - 1
      output ARR[R][C]
    end loop
    output "END ROW"
  end loop
end method`,
  },
  {
    //title is the category it appears in on the homepage
    title: '2D Arrays',
    // Pseudocode problems should start with a capital letter
    name: 'DiagArray',
    // the inputs that we are going to use to to test the code. An array of strings.
    // Each string should be parentheses, and inside you can have one or more arrays,
    // strings, ints, TRUE/FALSE, whatever. check warmup.js for more examples.
    inputs: [
      `([[1, 2, 3],[4, 5, 6],[7, 8, 9]])`,
      '([[2, 3], [6, 4]])',
      '([["a", "b", "c"],["A", "B", "C"], ["α","β", "ç"]])',
      '([[13, 6], [1, 2], [4, 6]])',
      '([[3, 2, 1, 4],[1, 1, 1, 1], [3, 1, -3, 1], [4, 4, 2, 4]])',
    ],
    // The question itself. Try to make it Pseudocode-y
    question: `Give a two - dimensional square array ARR, output a one - dimensional array that contains the elements 
    of its <i>primary diagonal</i > - that is, the elements whose row index and 
    column index are the same. 
    You can assume ARR has the same number of rows and columns.
    You can make a new array of length L with the command <code>NEW = new Array(L)</code> `,
    solution: `method FindDiagonal(ARR)
  // ARR.Length() will give the number of rows
  // ARR[0].Length() would give the # of columns
  NEW = new Array(ARR.Length())
  loop I from 0 to ARR.Length() - 1
    NEW[I] = ARR[I][I]
  end loop
  output NEW
end method`,
  }, {
    //title is the category it appears in on the homepage
    title: '2D Arrays',
    // Pseudocode problems should start with a capital letter
    name: 'FindValue',
    // the inputs that we are going to use to to test the code. An array of strings.
    // Each string should be parentheses, and inside you can have one or more arrays,
    // strings, ints, TRUE/FALSE, whatever. check warmup.js for more examples.
    inputs: [
      `([[1, 2, 3],[4, 5, 6]], 0)`,
      '([[2, 3], [6, 4], [2, 3]], 4)',
      '([["a", "b", "c"],["A", "B", "C"], ["α","β", "ç"]], "A")',
      '([[13, 6], [1, 2], [4, 6]], 6)',
      '([[3, 2, 1, 4],[1, 1, 1, 1], [3, 1, -3, 1], [4, 4, 2, 4]], 4)',
    ],
    // The question itself. Try to make it Pseudocode-y
    question: `Given a two-dimensional array ARR and a search value VAL,
    search the array in reading order - rows then columns - to find the first
    occurence of VAL. Once you find it, output "VAL found at index [R][C]"
    replacing VAL, R, and C with the appropriate values. If it isn't found, output
    "VAL not found". `,
    solution: `method FindValue(ARR, VAL)
  // ARR.Length() will give the number of rows
  // ARR[0].Length() would give the # of columns
  FOUND = FALSE
  loop ROW from 0 to ARR.Length() - 1
    loop COL from 0 to ARR[ROW].Length() - 1
      if ARR[ROW][COL] = VAL then
        output "" + VAL + " found at index [" + ROW + "][" + COL + "]"
        return
      end if
    end loop
  end loop
  output "" + VAL + " not found"
end method`,
  }, {
    //title is the category it appears in on the homepage
    title: '2D Arrays',
    // Pseudocode problems should start with a capital letter
    name: 'SwapRows',
    // the inputs that we are going to use to to test the code. An array of strings.
    // Each string should be parentheses, and inside you can have one or more arrays,
    // strings, ints, TRUE/FALSE, whatever. check warmup.js for more examples.
    inputs: [
      `([[1, 2, 3],[4, 5, 6]], 0, 1)`,
      '([[2, 3], [6, 4], [2, 3]], 0, 2)',
      '([["a", "b", "c"],["A", "B", "C"], ["α","β", "ç"]], 1, 2)',
      '([[13, 6], [1, 2], [4, 6]], 0, 2)',
      '([[3, 2, 1, 4],[1, 1, 1, 1], [3, 1, -3, 1], [4, 4, 2, 4]], 2, 3)',
    ],
    // The question itself. Try to make it Pseudocode-y
    question: `Given a 2d array MAT and two indices K and L, construct code to swap
    the elements in row K with the elements in row L (you can assume all rows are the
      same length). OUTPUT the new MAT on completion. (IB November 2018, 12b)`,
    solution: `method SwapRows(MAT, K, L)
      loop I from 0 to MAT[K].Length()-1
        TEMP = MAT[K][I]
        MAT[K][I]=MAT[L][I]
        MAT[L][I]=TEMP
      end loop
      output MAT
    end method`,
  }, {
    //title is the category it appears in on the homepage
    title: '2D Arrays',
    // Pseudocode problems should start with a capital letter
    name: 'Sort2D',
    // the inputs that we are going to use to to test the code. An array of strings.
    // Each string should be parentheses, and inside you can have one or more arrays,
    // strings, ints, TRUE/FALSE, whatever. check warmup.js for more examples.
    inputs: [
      `([[1, 21, 5],[4, 15, 6]])`,
      '([[2, 3], [1, 6], [2, 2]])',
      '([[13, 6, 11], [1, 2, 3], [4, 6, 5], [7, 0, -3]])',
      '([[3, 2, 1, 4],[1, 1, 1, 1], [3, 1, -3, 1], [4, 4, 2, 4]])',
    ],
    // The question itself. Try to make it Pseudocode-y
    question: `Given a 2D array MAT of numbers, construct a method that will sort the matrix 
    so that the sum of each row is in ascending order, and return the sorted array.
    
    Hint: It may be helpful to make submethods such as SumRow(MAT, ROW) and SwapRows(MAT, R1, R2).
    If you make methods inside the main method, you can use them just fine.`,
    solution: `method Sort2D(MAT)
    // Using selection sort
    loop FRNT from 0 to MAT.Length() - 2
      loop CHK from (FRNT + 1) to (MAT.Length() - 1)
        MIN = FRNT
        if SumRow(MAT, CHK) < SumRow(MAT, MIN) then
          MIN = CHK
        end if
        if MIN != FRNT then
          SwapRows(MAT, FRNT, MIN)
        end if
      end loop
    end loop
    
    output MAT


    method SumRow(MAT, R)
      S = 0
      loop I from 0 to MAT[R].Length() - 1
        S = S + MAT[R][I]
      end loop
      return S
    end method

    method SwapRows(MAT, K, L)
      loop I from 0 to MAT[K].Length() - 1
        TEMP = MAT[K][I]
        MAT[K][I]=MAT[L][I]
        MAT[L][I]=TEMP
      end loop
      return MAT
    end method
    
  end method`,

  }, {
    //title is the category it appears in on the homepage
    title: '2D Arrays',
    // Pseudocode problems should start with a capital letter
    name: 'DiagonalCollection',
    // the inputs that we are going to use to to test the code. An array of strings.
    // Each string should be parentheses, and inside you can have one or more arrays,
    // strings, ints, TRUE/FALSE, whatever. check warmup.js for more examples.
    inputs: [
      `([[1, 2, 3],[4, 5, 6],[7, 8, 9]])`,
      '([[2, 3], [6, 4]])',
      '([[13, 6], [1, 2]])',
      '([[3, 2, 1, 4],[1, 1, 1, 1], [3, 1, -3, 1], [4, 4, 2, 4]])',
    ],
    // The question itself. Try to make it Pseudocode-y
    question: `Given a 2d array square MAT, build a collection COL that contains the diagonal elements of MAT. Output the new collection. You can make a new collection with the command COL = new Collection()`,
    solution: `method Diagonal(MAT)
    COL = new Collection() 
    loop I from 0 to MAT.Length() - 1
      COL.addItem(MAT[I][I])
    end loop
    output COL
end method`,
  }, {
    //title is the category it appears in on the homepage
    title: 'Stacks and Queues',
    name: 'CollectionToStack',
    inputType: "collection",
    inputs: [
      '({1, 2, 3})',
      '({7, -3, 14})',
      '({"first", "second", "third"})',
      '({"Bob", "Mary", "Margaret", "Josiah", "Alistair"})'
    ],
    question: `Given a collection, COL, create a stack STK that contains 
    the elements so that the first element in the collection is the bottom 
    element in the stack. Output the stack. You can create a new stack with the command
    STK = new Stack()`,
    solution: `method CollectionToStack(COL)
        STK = new Stack()
        loop while COL.hasNext() 
          STK.push(COL.getNext())
        end loop
        output STK
    end method`,
  }, {
    //title is the category it appears in on the homepage
    title: 'Stacks and Queues',
    name: 'CollectionToQueue',
    inputType: "collection",
    inputs: [
      '({1, 2, 3})',
      '({7, -3, 14})',
      '({"first", "second", "third"})',
      '({"Bob", "Mary", "Margaret", "Josiah", "Alistair"})'
    ],
    question: `Given a collection, COL, create a queue that contains 
    the elements so that the first element in the collection is the front of the queue. 
    Output the queue. You can create a new queue with the command
    QUE = new Queue()`,
    solution: `method CollectionToQueue(COL)
        QUE = new Queue()
        loop while COL.hasNext() 
          QUE.enqueue(COL.getNext())
        end loop
        output QUE
    end method`,
  }, {
    //title is the category it appears in on the homepage
    title: 'Stacks and Queues',
    name: 'ReverseCollection',
    inputType: "collection",
    inputs: [
      '({1, 2, 3})',
      '({7, -3, 14})',
      '({"first", "second", "third"})',
      '({"Bob", "Mary", "Margaret", "Josiah", "Alistair"})'
    ],
    question: `Given a collection, COL, create a new collection that contains the same elements in reverse order. (Hint: use a stack in the middle!).
      Output the new collection.`,
    solution: `method ReverseCollection(COL)
        STK = new Stack()
        BCK = new Collection()
        COL.resetNext()

        loop while COL.hasNext() 
          STK.push(COL.getNext())
        end loop

        loop while NOT STK.isEmpty()
          BCK.addItem(STK.pop())
        end loop
        
        output BCK
    end method`,
  }, { //title is the category it appears in on the homepage
    title: 'Stacks and Queues',
    name: 'SplitStack',
    inputType: "stack",
    inputs: [
      '(B[1, 2, 3]T)',
      '(B[7, -3, 3, 14]T)',
      '(B[9, -2, 5, 11, 2]T)',
      '(B[2, 3, 4, 5, 6]T)',
      '(B[3, -3, 3, -3, 3]T)'
    ],
    question: `Given a stack if integers, STK, take items from the top of the stack
    and move them into a second stack, until you find a 3. The 3 should not be put in
    EITHER stack. 
    
    Output FIRST the new stack THEN the old stack (outputting empty stacks is fine)`,
    solution: `method SplitStack(STK)
    STK2 = new Stack()
    FOUND = false
    loop while NOT STK.isEmpty() AND NOT FOUND
      E = STK.pop()
      if E = 3 then
        FOUND = true
      else
        STK2.push(E)
      end if
    end loop

    output STK2
    output STK
end method`,
  }, {
    title: 'Stacks and Queues',
    name: 'MonsterStrength',
    inputType: "queue",
    inputs: [
      '(F[3, 0, 3, 1, 2, 1]B)',
      '(F[7, -3, 3, 14]B)',
      '(F[9, -2, 5, 11, 2]B)',
      '(F[2, 3, 4, 5, 6]B)',
      '(F[3, -3, 3, -3, 3]B)'
    ],
    question: `The parameter is a queue of integers that represents the strength of a series of monsters. Monsters are added to a battlefield in the same order they exist in the array. Each time a monster is added, it kills all monsters currently on the battlefield that have the same strength or lower - so for example, a monster of strength 3 would kill all monsters already on the field that have strength 3 or less. Any monsters stronger than the monster are left alone, and the new monster joins the field.
    <br><br>
    Consider the example of an input queue [3, 0, 3, 1, 2, 1]. The first monster would join the field, then the second, but when the third monster joins it would kill both of the original two, leaving only the third monster still on the field. Then the fourth monster (strength 1) would join, but then the fifth monster would kill the fourth monster. Finally the last monster would join and kill nobody. So the final group of monsters would be the stack B[3, 2, 1]T.
    <br><br>
    For each input, output a stack that contains all the living monsters on the field.
    <br><br>
    Credit to this problem to HackerEarth.com`,
    solution: `method MonsterField(MONSTERS)
FIELD = new Stack()
  loop while not MONSTERS.isEmpty()
    M = MONSTERS.dequeue()
    if FIELD.isEmpty() then
      FIELD.push(M)
    else 
      TOP = FIELD.pop()
      loop while TOP <= M and not FIELD.isEmpty()
        TOP = FIELD.pop()
      end loop
      // at this point either TOP > M or TOP <= M and the field is empty
      if (TOP > M) then
        FIELD.push(TOP)
      end if
      // new monster goes in
      FIELD.push(M)
    end if
  end loop
  output FIELD
end method`
  }
]