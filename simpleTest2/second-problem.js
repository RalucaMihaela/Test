module.exports = function (array) {

  	var firstMAX = Number.NEGATIVE_INFINITY;
    var secondMAX = Number.NEGATIVE_INFINITY;

    if(array.length === 0) return 0;

    for(var index = 0; index < array.length; index++) {
                  if(array[index] > firstMAX ) {
                          secondMAX  = firstMAX ;
                          firstMAX  = array[index];
                  } else if (array[index] > secondMAX ) {
                        	secondMAX  = array[index];
                  }            
     }
     return [firstMAX ,secondMAX ];
}