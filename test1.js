const should = require("should");
const request = require("request");
const expect = require("chai").expect;
const baseUrl = "http://dummy.restapiexample.com/api/v1/employees";
const util = require("util");

describe('Working expect', function() {
    it('Working expect', function() {
        request.get({ url: baseUrl },
            function(error, response, body) {
                const bodyObj = JSON.parse(body);
                expect(response.statusCode).to.equal(200);
                expect(bodyObj[0].id).to.equal("58562");
                console.log(body);
            });
    });
});