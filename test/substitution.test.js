const { expect } = require("chai");
const { substitution } = require("../src/substitution.js");

describe('substitution', () => {   
  it('is a function', () => {
    expect(substitution).to.be.a('function')
  })
}) 

describe('substitution', () => {
  it('should correctly substitute characters', () => {
    const result = substitution('message', '.$xkfehilmopnqrsuvtwyzabcd');
    expect(result).to.equal('nftt.hf');
  });

  it('should preserve spaces', () => {
    const result = substitution('my message', '.cdefihjklmonpqrsutvwxy$zb');
    expect(result).to.equal('nz nftt.hf');
  });
});

describe('substitution', () => {
  it('can include spaces, letters, and special characters in the input', () => {
    const result = substitution('zpo &%$@', '%a&bocdpefgh$ij@klmznqrstu', false )
    expect(result).to.eql('the camp')
  })
})

describe('substitution', () => {
  it('ignores capital letters', () => {
    const result = substitution('Thinkful', 'xoyqmcgrukswaflnthdjpzibev')
    expect(result).to.eql('jrufscpw')
  })
})

describe('substitution', () => {
  it('must have a parameter string alphabet with exactly 26 characters', () => {
    const result = substitution('you are an excellent spy!', 'xoyqmcgrukswaflnthdjpzibev%')
    expect(result).to.eql(false)
  })
})

describe('substitution', () => {
  it('can include special characters in the alphabet', () => {
    const result = substitution('message', '$wae&zrdxtfcygvuhbijnokmpl')
    expect(result).to.eql('y&ii$r&')
  })
})

describe('substitution', () => {
  it('all the characters in the alphabet must be unique', () => {
    const result = substitution('thinkful', 'abcabcabcabcabcabcabcabcyz')
    expect(result).to.eql(false)
  })
})

describe('substitution', () => {
  it('is working as described in the passing requirements in the previous lesson', () => {
    const result = substitution('message', 'plmoknijbuhvygctfxrdzeswaq')
    expect(result).to.eql('ykrrpik')
  })
})