/** --- solutions --- **/

let solutions = {};

solutions.mapBully = function mapBully(someMap) {
  if (someMap.has("a")) {
    someMap.set("b", someMap.get("a"));
    someMap.set("a", "");
  }
  return someMap;
}

solutions.mapShare = function mapShare(someMap) {
  if (someMap.has("a")) {
    someMap.set("b", someMap.get("a"));
  }
  someMap.delete("c");
  return someMap;
}

solutions.mapAB = function mapAB(someMap) {
  if (someMap.has("a") && someMap.has("b")) {
    let combinedString = someMap.get("a") + someMap.get("b");
    someMap.set("ab", combinedString);
  }
  return someMap;
}

solutions.topping1 = function topping1(someMap) {
  if (someMap.has("ice cream")) {
    someMap.set("ice cream", "cherry");
  }
  someMap.set("bread", "butter");
  return someMap;
}

solutions.topping2 = function topping2(someMap) {
  if (someMap.has("ice cream")) {
    someMap.set("yogurt", someMap.get("ice cream"));
  }
  if (someMap.has("spinach")) {
    someMap.set("spinach", "nuts");
  }
  return someMap;
}

solutions.topping3 = function topping3(someMap) {
  if (someMap.has("potato")) {
    someMap.set("fries", someMap.get("potato"));
  }
  if (someMap.has("salad")) {
    someMap.set("spinach", someMap.get("salad"));
  }
  return someMap;
}

solutions.mapAB2 = function mapAB2(someMap) {
  if (someMap.has("a") && someMap.has("b")) {
    if (someMap.get("a") === someMap.get("b")) {
      someMap.delete("a");
      someMap.delete("b");
    }
  }
  return someMap;
}

solutions.mapAB3 = function mapAB3(someMap) {
  if (someMap.has("a") && !someMap.has("b")) {
    someMap.set("b", someMap.get("a"));
  }
  else if (!someMap.has("a") && someMap.has("b")) {
    someMap.set("a", someMap.get("b"));
  }
  return someMap;
}

solutions.mapAB4 = function mapAB4(someMap) {
  if (someMap.has("a") && someMap.has("b")) {
    aLength = someMap.get("a").length;
    bLength = someMap.get("b").length;

    if (aLength > bLength) {
      someMap.set("c", someMap.get("a"));
    }
    else if (bLength > aLength) {
      someMap.set("c", someMap.get("b"));
    }
    else {
      someMap.set("a", "");
      someMap.set("b", "");
    }
  }
  return someMap;
}

 module.exports = solutions;