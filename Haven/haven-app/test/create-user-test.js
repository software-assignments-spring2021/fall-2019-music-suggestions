const assert = require('chai').assert;
const sayHello = require('../src/components/create-user.component').sayHello;

describe('CreateUser', function(){
  it('should return hello', function(){
    assert.equal(sayHello(), 'hello');
  });
});
