module.exports = function (array, n) {

    var length = array.length;
    var counter = zeroFilledArray(array.length);

    if (array.length === 0) return false;
    if (n != length) return false;
    for (var index = 0; index < array.length; index++) {
      if (array[index] < 1 || array[index] > n) {
          return false;
      } else {
    		if(counter[array[index]] === 1){
        			return true;
        }
        counter[array[index]]++;
      }
    }
    return false;

}
function zeroFilledArray(size) {
    return new Array(size + 1).join('0').split('');
}
