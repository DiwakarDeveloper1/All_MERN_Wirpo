const app = require("../script");
const expect = require("chai").expect;

// Here you need to write the test cases using assert
describe("General Test Cases", () => {
  //This test case should call sayhello() function and check and check the expected string
  it("Should return hello", () => {
    expect(app.sayHello("Rohit")).to.equal("Hello Rohit");
  });
  //This test case should class factorial function and check the expected result (factorial of a number)
  it("Should return factorial of a number", () => {
    expect(app.Factorial(6)).to.equal(720);
  });
  //This test case should call factorial() funtion and check the type of returned value to be a number
  it("Factorial() Should return number", () => {
    expect(typeof app.Factorial(6)).to.equal("number");
  });
});

// Here you need to write the test cases using expect
describe("New Test Suite", () => {
  // This test case should call getPerson() function and check the age property in person object
  it("Person should have age property", () => {
    expect(app.getPerson()).to.haveOwnProperty("age");
  });

  // This test case should call GetUsers() function and check the name property in person object
  it("User should have name property", (done) => {
    app.GetUsers().then((res) => {
      expect(res[0]).to.haveOwnProperty("name");
      done();
    });
  });
});
