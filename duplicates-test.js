const assert = require('assert');
const app = require('../duplicates-in-array');

describe('App', function() {
  describe('SimpleTest2', function(){
      it('Empty array should return false', function(){
          var array = [];
          var n = 0;
          let result = app(array,n);
          assert.equal(result,false);
      });
      it('N smaller than given array length', function(){
          var array = [1,2,3];
          var n = 2;
          assert.equal(app(array,n),false);
      });
      it('N bigger than given array length', function(){
          var array = [1,2];
          var n = 3;
          assert.equal(app(array,n),false);
      });
      it('Element bigger than n', function(){
          var array = [4,2,3,6];
          var n = 4;
          assert.equal(app(array,n),false);
      });
      it('Element smaller than 1', function(){
          var array = [4,3,2,0];
          var n = 4;
          assert.equal(app(array,n),false);
      });
      it('If there are duplicates return true', function(){
          var array = [1,4,5,2,4];
          var n = 5;
          assert.equal(app(array,n),true);
      });
      it('If there are not duplicates return false', function(){
          var array = [1,4,5,2,3];
          var n = 5;
          assert.equal(app(array,n),false);
      });
      it('Equal items', function(){
          var array = [2,2,2];
          var n = 3;
          assert.equal(app(array,n),true);
      });

  });
});
