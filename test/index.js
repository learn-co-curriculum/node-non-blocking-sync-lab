var expect = require('chai').expect
var fs = require('fs')
var path = require('path')

describe('mask.js', function () {
  it('must have work', function(done){
    var mask = require(path.join(__dirname, '../maskSync'))
    var maskedData = mask()
    var maskedTestData = fs.readFileSync('./test/customers.json', 'utf8')
    expect(maskedData).to.equal(maskedTestData)
    done()
  })
  it('must have readFileSync ', function(done){
    var mask = fs.readFileSync(path.join(__dirname, '../maskSync.js'), 'utf8')
    expect(mask).to.contain('readFileSync')
    done()
  })
  it('must have writeFileSync ', function(done){
    var mask = fs.readFileSync(path.join(__dirname, '../maskSync.js'), 'utf8')
    expect(mask).to.contain('writeFileSync')
    done()
  })
  it('must create customers.json', function(done){
    var stats
    try {
       stats = fs.statSync(path.join(__dirname, '../customers.json'))
    } catch(e){
      expect(e).to.be.null
    }
    expect(stats).to.not.be.undefined
    expect(stats.isFile()).to.equal(true)
    done()
  })
})
