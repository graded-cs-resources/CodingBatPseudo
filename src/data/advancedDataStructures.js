module.exports = [
  {
    //title is the category it appears in on the homepage
    title: '2D Arrays',
    // Pseudocode problems should start with a capital letter
    name: 'PrintAll (2D array)',

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
    title: '2D Array',
    // Pseudocode problems should start with a capital letter
    name: 'FindDiagonal',
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
    question: `Give a two - dimensional array ARR, RETURN (don't output!) a one - dimensional array that contains the elements 
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
  return NEW
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
      same length). return (don't output!) the new MAT on completion. (IB November 2018, 12b)`,
    solution: `method SwapRows(MAT, K, L)
      loop I from 0 to MAT[K].Length()-1
        TEMP = MAT[K][I]
        MAT[K][I]=MAT[L][I]
        MAT[L][I]=TEMP
      end loop
      return MAT
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
      `([[1, 21, 3],[4, 15, 6]])`,
      '([[2, 3], [1, 4], [2, 3]])',
      '([[13, 6, 11], [1, 2, 3], [4, 6, 5], [7, 0, -3]])',
      '([[3, 2, 1, 4],[1, 1, 1, 1], [3, 1, -3, 1], [4, 4, 2, 4]])',
    ],
    // The question itself. Try to make it Pseudocode-y
    question: `Given a 2D array MAT of numbers, construct a method that will sort the matrix 
    so that the sum of each row is in ascending order, and return the sorted array.`,
    solution: `method Sort2D(MAT)
    // Using selection sort
    FRNT = 0

    loop CHK from (FRNT + 1) to (MAT.Length() - 1)
      MIN = FRNT
      if SumRow(MAT, CHK) < SumRow(MAT, MIN) then
        MIN = CHK
      end if
      if MIN != FRNT then
        SwapRows(MAT, FRNT, MIN)
      end if
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
    name: 'Diagonal',
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
    question: `Given a 2d array square MAT, build a collection COL that contains the diagonal elements of MAT. Output the new collection. You can make a new collection with the command COl = new Collection()`,
    solution: `method Diagonal(MAT)
    COL = new Collection() 
    loop I from 0 to MAT.Length()
      COL.addItem(MAT[I][I])
    end loop
    output COL
    end method`,
  }
]