module.exports = function (array){
  for(var index = 0; index < array.length; index++){
       var item = array[Math.abs(array[index])];
       if (array.length === 0) return false;
      
       // if is positive make it negative
       if (item > 0) {
       		array[Math.abs(array[index])] = -array[Math.abs(array[index])];
       } else if (item < 0){  // if negative is duplicate
      		return true;
       }
    }
  return false;
}
