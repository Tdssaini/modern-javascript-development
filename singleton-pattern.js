const Singleton = (() => {
    let instance; 
    let count = 0;
    function createInstance() {
        return {
            add: function() {
                count++;
            },
            remove: function() {
                count--;
            },
            total:function(){
              return count;
            }
        };
    }
   
    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

var record1 = Singleton.getInstance();
record1.add();
record1.add();
record1.remove();
record1.add();
record1.add();
var record2 = Singleton.getInstance();
//console.log(`Total Number of records are ${record2.total()}`);
