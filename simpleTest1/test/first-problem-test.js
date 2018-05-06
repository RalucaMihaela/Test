const assert = require('assert');
const app = require('../app');

describe('App', function() {
  describe('SimpleTest1', function(){
      it('Empty array should return 0', function(){
          var array = [];
          let result = app(array);
          assert.equal(result,0);
      });
      it('One odd element should return 0', function(){
        var array = [1];
        assert.equal(app(array),0);
      });
      it('One even element should return the element', function(){
        var array = [2]
        assert.equal(app(array),2);
      });
      it('Only float elements should return 0', function(){
        var array = [1.2, 3.4, 5.4];
        assert.equal(app(array),0);
      });
      it('Just odd elements should return 0', function(){
        var array = [1, 1, 1];
        assert.equal(app(array),0);
      });
      it('Just negative elements should return the even negative element', function(){
        var array = [-2,-3];
        assert.equal(app(array),-2);
      });
      it('Negative and integer elements should return sum of even elements', function(){
        var array = [-2,4,3,6];
        assert.equal(app(array),8);
      });
      it('Just even elements should return sum of element', function(){
        var array = [2, 2, 2];
        assert.equal(app(array),6);
      });
      it('Float and integer elements should return the sum of even integers', function(){
        var array = [1.2, 2, 3];
        assert.equal(app(array),2);
      });
      it('Even and odd elements should return sum of even elements', function(){
        var array = [2, 2, 2];
        assert.equal(app(array),6);
      });
      it('Ignores non-numerical values in array', function(){
        var array = ['hei', 2, 3, 4];
        assert.equal(app(array),6);
      });
  });
});
