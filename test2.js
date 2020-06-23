var chakram = require('chakram');
var expect = chakram.expect;
describe("HTTP assertions", function () {
    it("should make HTTP assertions easy", function () {
      var response = get("https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=perl&site=stackoverflow");
      expect(response).to.have.status(200);
      expect(response).to.have.header("content-type", "application/json");
      expect(response).not.to.be.encoded.with.gzip;
      
    });
  }); 