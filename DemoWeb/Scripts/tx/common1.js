(function() {
  var PrivateMessage1;

  this.GlobalMessage1 = (function() {

    function GlobalMessage1() {}

    GlobalMessage1.prototype.say_hello = function() {
      return alert("Hello Method 1");
    };

    return GlobalMessage1;

  })();

  PrivateMessage1 = (function() {

    function PrivateMessage1() {}

    PrivateMessage1.prototype.say_nothing = function() {
      return alert('Nothing');
    };

    return PrivateMessage1;

  })();

}).call(this);
