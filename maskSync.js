var fs = require('fs')
module.exports = function(){
  var customers = []
  var customersCSV = fs.readFileSync('./customers.csv', 'utf8')
  customersLines = customersCSV.split('\n')
  customersLines.forEach(function(customerLine){
    var customerArray = customerLine.split(',')
    customers.push({
      id: customerArray[0],
      firstName: customerArray[1],
      lastName: customerArray[2],
      email: customerArray[3],
      city: customerArray[4],
      creditCard: customerArray[5],
      creditCardNumber: '************' + customerArray[6].substr(12)
    })
  })
  var customersJSON = JSON.stringify(customers)
  fs.writeFileSync('./customers.json', customersJSON)
  return customersJSON
}