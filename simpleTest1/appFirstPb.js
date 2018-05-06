module.exports = function (array) {
    
    var sum = 0;

    for (var index = 0; index < array.length; index++) {        
            if (array[index] % 2 === 0) {
                sum += array[index];
            }
    } 
    
    return sum;
}
