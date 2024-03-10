const Module = (function () {
  let privateVar = "I am private";
  function privateFunction() {
    console.log("This is a private function");
  }
  return {
    publicVar: "I am public",
    publicFunction: function () {
      console.log("This is a public function");
      console.log(privateVar);
      privateFunction();
    },
  };
})();

console.log(Module.publicVar); 
Module.publicFunction(); 