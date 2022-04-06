console.log("         ************************************");
console.log("         * START OF NON-STRICT MODE VERSION *");
console.log("         ************************************");

function f() {
  if (this) {
    if (this.tom) {
      console.log(this.tom);
    } else {
      console.log(
        "This must be node as node does not attach file-level variables to the global object."
      );
    }
  } else {
    console.log(
      "In strict mode 'this' is undefined in a simple function call."
    );
    console.log(
      "This makes sense since it would almost always be an error to call"
    );
    console.log("a this-aware function without a context.");
  }
}

var tom = "Cruise";
var o1 = {
  tom: "Langan",
};

f();
f.call(o1);
