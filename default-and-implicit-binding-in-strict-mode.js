"use strict";
console.log("         ********************************");
console.log("         * START OF STRICT MODE VERSION *");
console.log("         ********************************");

var tom = "Cruise";
var o1 = {
  tom: "Langan",
  fImplicit: fImplicit,
};

//************************************************
// Default Binding
//************************************************

fDefault();

// -----------------------------------------------
// Helper functions for the executable code above in this section

function fDefault() {
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

// end of Default Binding section
// -----------------------------------------------

//************************************************
// Implicit Binding
//************************************************

fImplicit();
o1.fImplicit();

// -----------------------------------------------
// Helper functions for the executable code above in this section

function fImplicit() {
  console.log("displaying Tom's last name without reference to 'this': ", tom);
  if (this) {
    console.log("displaying Tom's last name using 'this': ", this.tom);
  } else {
    console.log("'this; is not defined");
  }
}

// end of Implicit Binding section
// -----------------------------------------------

//************************************************
// Explicit Binding
//************************************************
