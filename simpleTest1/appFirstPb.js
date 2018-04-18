module.exports = function (array) {

    var sum = 0;
    let notNumber = 0;

    if(array.length > 0) {
         for (var index = 0; index < array.length; index++){
                if(parseInt(array[index]) === array[index]){
                      if(array[index] % 2 === 0){
                            sum += array[index];
                      }
                 } else {
                            notNumber++;
                        }
         }
     } else { 
              return 0;
            }

     if(notNumber === array.length){
         return 0;
     }
  return sum;
}
