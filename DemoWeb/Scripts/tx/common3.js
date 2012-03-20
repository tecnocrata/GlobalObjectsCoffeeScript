(function() {
  var root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  root.Framework2 = {
    Utilities: {},
    GlobalMessage: {}
  };

  Framework2.GlobalMessage = (function() {

    function GlobalMessage() {}

    GlobalMessage.prototype.say_hello = function() {
      return alert("Hello Method 3");
    };

    return GlobalMessage;

  })();

}).call(this);
