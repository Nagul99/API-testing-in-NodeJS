var should = require("should");
var request = require("request");
var expect = require("chai").expect;

 

describe("Chakram", function() {
  it("should offer simple HTTP request capabilities", function () {
     var response = request.get("https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=perl&site=stackoverflow");
     expect(response.statusCode).to.equal(200);
   });

});