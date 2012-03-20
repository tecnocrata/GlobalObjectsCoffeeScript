(function() {

  window['Framework1'] = {};

  window['Framework1.GlobalMessage'] = {};

  Framework1.GlobalMessage = (function() {

    function GlobalMessage() {}

    GlobalMessage.prototype.say_hello = function() {
      return alert("Hello Method 2");
    };

    return GlobalMessage;

  })();

}).call(this);
