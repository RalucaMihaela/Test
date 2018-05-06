const assert = require('assert');
const app = require('../app');

describe('App', function() {
  describe('SimpleTest2', function(){
      it('Empty array should return 0', function(){
          var array = [];
          let result = app(array);
          assert.equal(result,0);
      });
      it('One element should return the element', function(){
        var array = [1];
        assert.deepStrictEqual(app(array),[1,0]);
      });
      it('Ignore float elements', function(){
        var array = [1.2, 2, 3];
        assert.deepStrictEqual(app(array),[3,2]);
      });
      it('Ignores non-numerical values in array', function(){
        var array = ['hei', 2, 3, 4];
        assert.deepStrictEqual(app(array),[4,3]);
      });
      it('Two elements should return both elements', function(){
        var array = [1,2];
        assert.deepStrictEqual(app(array),[2,1]);
      });
      it('First element bigger than last', function(){
        var array = [2,1];
        assert.deepStrictEqual(app(array),[2,1]);
      });
      it('Two negative elements should return both elements', function(){
        var array = [-2,-3];
        assert.deepStrictEqual(app(array),[-2,-3]);
      });

      it('One negative and one positive', function(){
        var array = [-2,3];
        assert.deepStrictEqual(app(array),[3,-2]);
      });
      it('One negative and one positive, first positive', function(){
        var array = [3,-2];
        assert.deepStrictEqual(app(array),[3,-2]);
      });
      it('Positive, negative elements and also 0', function(){
        var array = [-2,0,3];
        assert.deepStrictEqual(app(array),[3,0]);
      });
      it('Two negative elements and 0 should return the biggest negative element and 0', function(){
        var array = [0, -2147483648, -2];
        assert.deepStrictEqual(app(array),[0,-2]);
      });
      it('Two identical elements and zero shoul return those two identical elements', function(){
        var array = [-1,1,1];
        assert.deepStrictEqual(app(array),[1,1]);
      });
      it('Both negative and positive elements', function(){
        var array = [-2,4,3,6];
        assert.deepStrictEqual(app(array),[6,4]);
      });

  });
});
