module.exports = function CodeMirrorPSHighlighting(CodeMirror) {
  CodeMirror.defineMode("pseudocode", function () {
    var define = ["method", "class"];
    var keywords = ["to","override", "overload", "new", "from","input","output",
      "while", "AND", "OR", "NOT", "and", "or", "not", "mod", "div"];
    var operator = /^[+\-*&%=<>!?|~^]/;
    var bracket = /^[:;\(\)\[\]\{\}]/;
    var atom = ["TRUE", "FALSE","loop","end loop","if", "else", "end if", "then", "method", "end method"];
    var number = /^(\d[+\-\*\/])?\d+(\.\d+)?/;
    var word = /^\w+(?:'\w+)?/;
    var uword = /^[A-Z_][A-Z_0-9]+/;

    define = new RegExp("((" + define.join(")|(") + "))\\b");
    keywords = new RegExp("((" + keywords.join(")|(") + "))\\b");
    atom = new RegExp("((" + atom.join(")|(") + "))\\b");

    function tokenBase(stream, state) {
      function internalTokenBase(stream, state) {
        var ch = stream.peek();

        if (stream.eol()) {
          state.define = false;
        }

        if (state.incomment) {
          if (!stream.skipTo("*/")) {
            stream.skipToEnd();
          } else {
            stream.eatWhile(/\*|\//);
            state.incomment = false;
          }
          return "doc-multiline";
        }
        else if (state.instring) {
          if (ch == state.instring) {
            state.instring = false;
          }
          stream.next();
          return "string";
        }
        else if (ch == "'" || ch == '"') {
          state.instring = ch;
          stream.next();
          return "string";
        }
        else if (stream.eat("/")) {
          if (stream.eat("*")) {
            state.incomment = true;
            if (!stream.skipTo("*/")) {
              stream.skipToEnd();
            } else {
              stream.eatWhile(/\*|\//);
              state.incomment = false;
            }
            return "doc-multiline";
          }
          else if (stream.eat("/")) {
            if (stream.match(/\s*\.\.\.+\s*$/)) {
              stream.skipToEnd();
              return "comment";
            }
            stream.skipToEnd();
            return "doc";
          }
        } else {
          if (stream.eat(" ")) {
            stream.eatSpace();
            return;
          }
          else {
            if (state.sol && stream.match(define)) {
              state.define = true;
              state.def_mode = 1;
              return "token";
            }
            if (stream.match(keywords)) {
              state.define = false;
              state.def_mode = null;
              return "keyword";
            }
            if (stream.match(atom)) {
              return "atom";
            }
            if (stream.match(operator)) {
              return "operator";
            }
            if (stream.match(bracket)) {
              state.define = false;
              state.def_mode = null;
              return "bracket";
            }
            if (stream.match(number)) {
              return "number";
            }
            if (stream.match(uword)) {
              return "variable";
            }
            if (stream.match(word)) {
              if (state.define) {
                var token = "def";
                return token;
              }
              return "variable";
            }
          }
        }

        stream.next();
      }

      if (stream.sol()) {
        state.sol = true;
      }
      var result = internalTokenBase(stream, state);
      if (result) {
        state.sol = false;
      }
      return result;
    }

    return {
      startState: function () {
        return {};
      },
      token: function (stream, state) {
        return tokenBase(stream, state);
      }
    };
  });

  CodeMirror.defineMIME("text/x-pseudocode", "pseudocode");
}