const Collection = require("./collections")
// these three variables help the translation work
var out;
var TRUE = true;
var FALSE = false;

/**
 * takes pseudocode, converts to javascript, and runs it on the input
 * @param {function} f
 * @param {any} input
 * @return {any}
 */
module.exports = function runPS(code, i) {

  let lines = getLines(code);
  var c = "";
  for (const line of lines) {
    c += translate(line) + "\n";
  }
  let userCode;
  try {
    eval(`out="";TRUE=true;FALSE=false;userCode=${c}`);
  } catch (e) {
    console.log("Error, here is the translated function")
    console.log(c);
    throw (e);
  }
  var ret = userCode(...i);
  return [ret, out];
}

//The next batch of functions are used BY the pseudocode. Don't delete them!

function input(str) {
  var answer = prompt(str)
  if (answer != null && answer.length > 0 && !isNaN(answer)) {
    return parseFloat(answer)
  }
  else {
    return answer
  }
}

function output() {
  var a = 0
  var output = ""
  for (a = 0; a < arguments.length; a++) {
    output = "" + arguments[a];
    output = output.replaceAll("true", "TRUE").replaceAll("false", "FALSE");
    if (typeof arguments[a] === "string") {
      output = `"${output}"`;
    } else if (Array.isArray(arguments[a])) {
      if (arguments[a].length > 0 && typeof arguments[a][0] === "string") {
        output = output.replaceAll(/([a-zA-Z0-9 ]+)/g, "\"$1\"");
      }
      output = "[" + output.replaceAll(",", ", ") + "]";
    }
  }
  out += output + "\n";
}

function div(A, B) {
  return Math.floor(A / B)
}

// function Collection() {
//   var values = new Array();
//   var next = 0;

//   this.isEmpty = function () {
//     if (values.length) {
//       return (values.length < 1)
//     }
//     else { return true }
//   }

//   this.add = function (value) {
//     var size = values.length
//     values[size] = value;
//   }

//   this.addItem = function (value) {
//     var size = values.length
//     values[size] = value;
//   }

//   this.resetNext = function () {
//     next = 0
//   }

//   this.getNext = function () {
//     var result = null
//     if (this.hasNext()) {
//       result = values[next]
//       next = next + 1
//     }
//     return result
//   }

//   this.hasNext = function () {
//     if (next < values.length) {
//       return true;
//     }
//     else {
//       return false;
//     }
//   }

//   this.showAll = function () {
//     alert("There are " + values.length + " values in this collection")
//     var saveNext = next;
//     this.resetNext();
//     while (this.hasNext()) {
//       alert(this.getNext())
//     }
//     next = saveNext;
//   }

//   this.contains = function (val) {
//     var x = 0
//     while (x < values.length) {
//       if (values[x] == val) {
//         return true
//       }
//       x++;
//     }
//     return false
//   }

//   this.remove = function (val) {
//     var found = -1
//     var p = 0;
//     while (p < values.length) {
//       if (values[p] == val) {
//         found = p
//         break
//       }
//       p++
//     }
//     if (found >= 0) {
//       values.splice(found, 1)
//     }
//   }

// }

function Stack() {
  var values = new Array();
  var next = 0;

  this.isEmpty = function () {
    if (values.length) {
      return (values.length < 1)
    }
    else { return true }
  }

  this.push = function (val) {
    values.splice(0, 0, val)
  }

  this.pop = function () {
    var result = null
    if (values.length > 0) {
      result = values[0]
      values.splice(0, 1)
    }
    return result
  }

}

function Queue() {
  var values = new Array();
  var next = 0;

  this.isEmpty = function () {
    if (values.length) {
      return (values.length < 1)
    }
    else { return true }
  }

  this.enqueue = function (value) {
    var size = values.length
    values[size] = value;
  }

  this.dequeue = function () {
    var result = null
    if (values.length > 0) {
      result = values[0]
      values.splice(0, 1)
    }
    return result
  }
}

function Array2D(rows, cols) {
  a2d = new Array(rows)
  for (r = 0; r < rows; r++) {
    a2d[r] = new Array(cols)
  }
  return a2d
}

Array.prototype.Length = function () {
  return this.length;
}

Array.prototype.Slice = function (S, L) {
  return this.slice(S, S + L);
}

String.prototype.Length = function () {
  return this.length;
}

String.prototype.SubStr = function (S, L) {
  return this.substr(S, L);
}

/** Translates a single line from PS (or JS) to JS */
function translate(line) {
  //do a sanity check - if this is javascript, leave it alone
  if (line.indexOf("{") !== -1) return line;
  line = line.replace(/ mod /g, " % ")
  line = line.replaceAll(/([0-9A-Za-z]+) div ([0-9A-Za-z]+)/g, "div($1, $2)");
  line = line.replaceAll(/(\([^()]+\)) div (\([^()]+\))/g, "div($1, $2)");
  line = line.replaceAll(/([0-9A-Za-z]+) div (\([^()]+\))/g, "div($1, $2)");
  line = line.replaceAll(/(\([^()]+\)) div ([0-9A-Za-z]+)/g, "div($1, $2)");
  line = line.replaceAll(/([^"])TRUE/g, "$1true");
  line = line.replaceAll(/([^"])FALSE/g, "$1false");
  var lin = line.trim();
  var sp = lin.indexOf(" ");
  var first = "";
  if (startswith(lin, "if")) { first = "if" }
  else if (startswith(lin, "return")) { first = "return" }
  else if (startswith(lin, "else if")) { first = "else if" }
  else if (startswith(lin, "else")) { first = "else" }
  else if (startswith(lin, "loop while")) { first = "loop while" }
  else if (startswith(lin, "loop for")) { first = "loop for" }
  else if (startswith(lin, "loop until")) { first = "loop until" }
  else if (startswith(lin, "loop ")) { first = "loop" }
  else if (startswith(lin, "output")) { first = "output" }
  else if (startswith(lin, "method ")) { first = "method" }
  else if (startswith(lin, "Class ")) { first = "class" }
  else if (startswith(lin, "input")) { first = "input" }
  else {
    if (sp >= 0) { first = lin.substring(0, sp); }
  }
  if ((first == "if" || first == "else if" || first == "return")) {

    line = line.replace("if ", "if(");
    if (first == "else if") { line = line.replace("else if", "}else if") }
    line = line.replace(" then", "){");
    line = line.replace(/ AND /g, " && ");
    line = line.replace(/ OR /g, " || ");

    line = line.replace(/NOT/g, "!");
    line = line.replace(/<>/g, "!=");
    line = line.replace(/ = /g, " == ")
  }
  if (first == "else") { line = line.replace("else", "}else{") }
  if (first == "loop while") {
    line = line.replace("loop while", "while(") + "){";
    line = line.replace(/ AND /g, " && ");
    line = line.replace(/ OR /g, " || ");

    line = line.replace(/NOT/g, "!");
    line = line.replace(/<>/g, "!=");
    line = line.replace(/ = /g, " == ")
  }
  if (first == "loop for") {
    var v = line.indexOf("loop for") + 9;
    var ve = line.indexOf(" ", v);
    var vname = line.substring(v, ve);

    var vs = line.indexOf(" from ") + 6;
    var vt = line.indexOf(" to ");
    var vstart = line.substring(vs, vt);

    var vend = line.substring(vt + 4);

    line = "for(" + vname + "=" + vstart + ";" + vname + "<=" + vend + ";" + vname + "++){"

  }
  if (first == "loop until") {
    line = line.replace("loop until", "while(!(") + ")){";
    line = line.replace(/ AND /g, " && ");
    line = line.replace(/ OR /g, " || ");

    line = line.replace(/NOT/g, "!");
    line = line.replace(/<>/g, "!=");
    line = line.replace(/ = /g, " == ")
  }
  if (first == "loop") {
    var v = line.indexOf("loop") + 5;
    var ve = line.indexOf(" ", v);
    var vname = line.substring(v, ve);

    var vs = line.indexOf(" from ") + 6;
    var vt = line.indexOf(" to ");
    var vstart = line.substring(vs, vt);

    var vend = line.substring(vt + 4);

    line = "for(" + vname + "=" + vstart + ";" + vname + "<=" + vend + ";" + vname + "++){"

  }
  if (first == "end") { line = "}"; }
  if (first == "output") {
    var t = line.indexOf("output") + 6
    line = "output(" + line.substring(t) + ")"
  }
  if (first == "input") {
    var v = line.indexOf("input") + 6
    var name = line.substring(v)
    line = name + " = input(\"" + name + "\")"
  }
  if (first == "method") {
    line = line.replace(/method/, "function") + "{"
  }

  if (first == "class") {
    line = line.replace(/Class/, "function") + "{"
  }

  return line
}

function startswith(whole, part) {
  var n = part.length
  if (whole.substring(0, n) == part) {
    return true
  }
  else { return false }
}

function trim(s) {
  var b = 0
  var e = s.length
  while (e > 0 && s.charAt(e - 1) <= ' ') { e-- }
  while (b < e && s.charAt(b) <= ' ') { b++ }
  return s.substring(b, e)
}

function getLines(code) {
  var lines = code.split("\n")
  for (c = 0; c < lines.length; c++) { lines[c] = trim(lines[c]) }

  return lines
}

function replacePairs(s, a, b, ar, br) {
  var p = s.indexOf(a)
  while (p >= 0) {
    s = s.substring(0, p) + ar + s.substring(p + a.length)
    p = s.indexOf(b)
    if (p < 0) { s = s + br }
    else { s = s.substring(0, p) + br + s.substring(p + b.length) }
    p = s.indexOf(a)
  }
  return s
}