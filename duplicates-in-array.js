module.exports = function (array, n){
  var hasDuplicates = false;
  var sum = 0;
  var length = array.length;
    if ( array.length === 0 ) return false;
  	if( n != length ) return false;
		for(var index = 0; index< n; index++){
    		if(array[index] < 1 || array[index] > n){
        		return false;
        }
        else{
    		sum += array[index];
        }
    }
    if(sum == (n*(n+1))/2){
    		return false;
    }else{
    		return true;
    }
}
