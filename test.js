var expect = require('expect.js');
var helper = require('./index');

describe('The helper', function(){
  it('should return a string of a function contents', function(){
    expect(helper(function(){return a+b;})).to.eql('return a+b;');
  });
});