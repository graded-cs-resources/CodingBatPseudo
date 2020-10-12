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


module.exports = solutions;