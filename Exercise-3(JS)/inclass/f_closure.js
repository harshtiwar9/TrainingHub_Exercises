function init() {
    var name = 'Mozilla'; 
    function displayName() { 
       console.log(name);
    }
    displayName(name);
  }
init();









// ====== Helps us to include private 
var counter = (function() {
    var privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
  
    return {
      increment: function() {
        changeBy(1);
      },
  
      decrement: function() {
        changeBy(-1);
      },
  
      value: function() {
        return privateCounter;
      }
    };
  })();




