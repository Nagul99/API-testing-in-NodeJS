var chai = require('chai');
var chaiHttp = require('chai-http');
const should = require("should");
const request = require("request");
var expect = require("chai").expect;
var baseUrl = ("https://qa-api.imahila.in:443");
//const util = require("util");
chai.use(chaiHttp);
describe('Working expect', function() {
 it('Working expect', function() {
     chai.request(baseUrl)
     .post('/api/v1/users/register')
     //.query({categorylimit : 5, programmelimit: 5, programmefields: 'name,description,playCount,coverImage,resourceUri,tags', categoryfields: 'name,description',tagfields:'name,description,coverImage'})
     .set('authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVjOTQ3ZjUxNDAzODdlMDNhMDhjZjYxOSIsInBob25lIjo5NzkxMzMxMjgwLCJsYW5ndWFnZSI6IjVjMzlhMTVmYjRmZWQxM2ZlNzNiM2E4NCIsInByZWZlcmVuY2VzIjpbIjVjY2VjNmMwZjk5ZTA0NDA3YmU3NGRlOCJdLCJyb2xlcyI6WyJ1c2VyIl19LCJkZXZpY2UiOiI1YzliMjViMjJiNDAwOTNhZmY1M2RlZWMiLCJpYXQiOjE1NTg0NDMzMzIsImV4cCI6MTU1ODQ0MzYzMiwiYXVkIjoiYW5kcm9pZC1nYXRld2F5IiwiaXNzIjoidXNlci1zZXJ2aWNlLmp3dC1tYW5hZ2VyLmF1dGgiLCJzdWIiOiJnZW5lcmFsLXJlc291cmNlLWF1dGhvcml6YXRpb24ifQ.buMEVRb1M2MVCjMQMG_yABK-veibzAlTsQA1xglVaio')
     .set('X-Device-Identifier','5c9b25b22b40093aff53deec')
     .set('Content-Type', 'application/json')
     .send({
       language : "5c39a78eb4fed13fe73b3a85",
       phone : "9791331290", //change new number for registration
       preferences : []
        })
     .end(function(error, response, body) {

             expect(response.statusCode).to.equal(200);

         });

 });
});