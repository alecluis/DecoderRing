const { expect } = require("chai");
const { caesar } = require("../src/caesar.js");

describe('caesar', () => {   
  it('is a function', () => {
    expect(caesar).to.be.a('function')
  })
}) 

describe('caesar', () => {
  it('should return false if shift value is 0', () => {
    const actual = caesar('beethoven', 0)
    expect(actual).to.eql(false)
  })
})

describe('caesar', () => {
  it('should return false if shift value is undefined', () => {
    const actual = caesar('bach',)
    expect(actual).to.eql(false)
  })
})

describe('caesar', () => {
  it('should return false if shift value is less than -25', () => {
    const actual = caesar('handel', -26)
    expect(actual).to.eql(false)
  })
})

describe('caesar', () => {
  it('should return false if shift value is more than 25', () => {
    const actual = caesar('vivaldi', 26)
    expect(actual).to.eql(false)
  })
})

describe('caesar', () => {
  it('should maintain spaces and other nonalphabetic symbols', () => {
    const actual = caesar('stravinsky is $difficult to enjoy!', 9)
    expect(actual).to.eql('bcajerwbth rb $mroorlduc cx nwsxh!')
  })
})

describe('caesar', () => {
  it('should ignore capital letters', () => {
    const actual = caesar('Cage', 3)
    expect(actual).to.eql('fdjh')
  })
})

describe('caesar', () => {
  it('should wrap to front of alphabet if a letter is shifted so that it goes "off" the alphabet', () => {
    const actual = caesar('wagner', 6)
    expect(actual).to.eql('cgmtkx')
  })
})

describe('caesar', () => {
  it('the caesar shift is working as described in the passing requirements in the previous lesson', () => {
    const actual = caesar('Zebra Magazine', 3) 
    expect(actual).to.eql('cheud pdjdclqh')
  })
})
  


