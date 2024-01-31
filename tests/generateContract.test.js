const generateContract = require('../utils/generateContract');


// Arrange
// Act
// Assert

describe("contract Object", () => {
  // Arrange
    const currentDate = new Date();
    const date = currentDate.toLocaleDateString();
    const developerName = "Jay Manny"
    const clientName = "John Doe"
    const totalFee = 420.69
    const paymentTerms = "cash - full amount"
    currentDate.setDate(currentDate.getDate() + 7);
    const completionDate = currentDate.toLocaleDateString();
    const scopeChangesFee = 22.50
    const confidentiality = false
    const revisionsCount = 3
    const revisionDays = 69
    const noticePeriod = 18

  test("Returns a contract string", () => {
// Act
    const contract = generateContract({
      date,
    developerName,
    clientName,
    totalFee,
    paymentTerms,
    completionDate,
    scopeChangesFee,
    confidentiality,
    noticePeriod,
    revisionsCount,
    revisionDays,
  })
    console.log(contract)
// Assert
    expect(typeof contract).toBe('string')
  })
  test("Has a date", () => {
    
  })
  test("Has the developer's name", () => {
    
  })
  test("as the client's name", () => {
    
  })
  test("The fee is greater than zero. If zero, has an explanation.", () => {
    
  })
  test("Has payment terms(e.g: cash)", () => {
    
  })
  test("Has a completion date", () => {
    
  })
  test("the scope changes fee is a number greater than the original number", () => {
    
  })
  test("Confidentiality signature?", () => {
    
  })
  test("The contract has the amount of revisions the developer is willing to make", () => {
    
  })
  test(" The contract has the num of days the client can request revisions on the project.", () => {
    
  })
  test("has a notice period if either party wishes to terminate this agreement", () => {
    
  })
})
