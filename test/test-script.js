var should = chai.should();
var expect = chai.expect;
mocha.setup('bdd');

describe('Bubble Sort', function() {

  it('Should have a function called bubbleSort', function() {
    bubbleSort.should.be.a('function');
  });
  it('Should check length', function() {
    var num = [2, 7, 4, 1, 9, 5];
    num.should.have.length(6);
  });
  it('Should print an array of sorted numbers', function() {
    bubbleSort(num);
    num.should.deep.equal([1, 2, 4, 5, 7, 9]);
    num.should.be.an.array;
  });
  it('Should print total numbers of swaps', function() {
    var count = 6;
    count.should.be.a('number');
  });
}); //end of Bubble Sort

mocha.run();