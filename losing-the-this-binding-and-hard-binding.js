"use strict";

function f() {
  console.log(this.tom);
}

var o1 = {
  tom: "Langan",
  f: f,
};

var fHardBound = f.bind(o1);

var o2 = {
  tom: "Cruise",
};

o1.f();
o1.f.call(o2);
fHardBound();
fHardBound.call(o2);
