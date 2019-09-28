const names = ["john", "bruce", "lee","jackie","jack"];

var filter = names.filter(function(onlyA) {
   return onlyA.includes('a');
});

var reversed = names.map(function (a) {
   return a;
}).reverse();


const myFilter = function(arr, callback){
   const newArr = [];
   for(let idx in arr){
      if(callback(arr[idx])){
         newArr.push(arr[idx]);
      }
   }
   return newArr;
};

