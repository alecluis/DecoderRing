const { expect } = require("chai");
const { polybius } = require("../src/polybius.js");

describe('polybius', () => {   
  it('is a function', () => {
    expect(polybius).to.be.a('function')
  })
}) 

describe('polybius', () => {
  it('output should be a string when encoding', () => {
    expect('thinkful').to.be.a('string')
  })
})

describe('polybius', () => {
  it('should maintain spaces when encoding', () => {
    const result = polybius('my name is alec')
    expect(result).to.eql('2345 33112351 4234 11135131')
  })
})

describe('polybius', () => {
  it('should maintain spaces when decoding', () => {
    const result = polybius('3251131343 2543241341', false)
    expect(result).to.eql('hello world')
  })
})

describe('polybius', () => {
  it('should ignore capital letters', () => {
    const result = polybius('State of California')
    expect(result).to.eql('3444114451 4312 31111342124324334211')
  })
})

describe('polybius', () => {
  it('should handle the shared space for I and J', () => {
    const result = polybius('him');
    expect(result).to.eql('324223')
  })
})

describe('polybius', () => {
  it('both i and j can be converted to 42 when encoding', () => {
    const result = polybius('jif')
    expect(result).to.eql('424212')
  })
})

describe('polybius', () => {
  it('both i and j should be shown when decoding', () => {
    const result = polybius('4432423352125413', false)
    expect(result).to.eql('th(i/j)nkful')
  })
})

describe('polybius', () => {
  it('is working as described in the passing requirements in the previous lesson', () => {
    const result = polybius('message')
    expect(result).to.eql('23513434112251')
  })
})