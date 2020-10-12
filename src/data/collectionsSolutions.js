let solutions = [];

solutions.Count7s = `method Count7s(NUMS)
  COUNT = 0
  NUMS.resetNext()
  loop while NUMS.hasNext()
    N = NUMS.getNext()
    if N = 7 then
      COUNT = COUNT + 1
    end if
  end loop
  
  output COUNT
end method`;


solutions.CountAs = `method CountAs(WORDS)
  COUNT = 0
  WORDS.resetNext()
  loop while WORDS.hasNext()
    W = WORDS.getNext()
    if W.SubStr(0,1) = "a" OR W.SubStr(0,1) = "A" then
      COUNT = COUNT + 1
    end if
  end loop
  
  output COUNT
end method`;

solutions.SumCollection = `method SumCollection(NUMS)
  SUM = 0
  NUMS.resetNext()
  loop while NUMS.hasNext()
    N = NUMS.getNext()
    SUM = SUM + N
  end loop
  output SUM
end method`;

solutions.AverageCollection = `method AverageCollection(NUMS)
  SUM = 0
  COUNT = 0
  NUMS.resetNext()
  loop while NUMS.hasNext()
    N = NUMS.getNext()
    COUNT = COUNT + 1
    SUM = SUM + N
  end loop
  output (SUM / COUNT)
end method`;

solutions.RotateLeftCollection = `method RotateLeftCollection(NUMS)
  C = new Collection()
  if NOT NUMS.isEmpty() then
    FIRST = NUMS.getNext()
    loop while NUMS.hasNext()
      C.addItem(NUMS.getNext())
    end loop
    C.addItem(FIRST)
  end if
  output C  
end method`;
module.exports = solutions;