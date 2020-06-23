var chai = require('chai');
var chaiHttp = require('chai-http');
const should = require("should");
const request = require("request");
var expect = require("chai").expect;
var baseUrl = "https://api.imahila.in:443";
const util = require("util");

chai.use(chaiHttp);

describe('Working expect', function() {
   it('Working expect', function() {
       chai.request(baseUrl)
       .get('/api/v1/languages')
       .query({limit : 3, offset: 0, fields: 'name,description,code,coverImage'})
       //.set('X-Device-Identifier', '5c9b25b22b40093aff53deec')
       //.auth('Token','Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVjOTQ3ZjUxNDAzODdlMDNhMDhjZjYxOSIsInBob25lIjo5NzkxMzMxMjgwLCJsYW5ndWFnZSI6IjVjMzlhMTVmYjRmZWQxM2ZlNzNiM2E4NCIsInByZWZlcmVuY2VzIjpbIjVjNWQ3NzQyMGM0NjQzMDE0OWMxOGIxNSJdLCJyb2xlcyI6WyJ1c2VyIl19LCJkZXZpY2UiOiI1YzliMjViMjJiNDAwOTNhZmY1M2RlZWMiLCJpYXQiOjE1NTgzNDg5MTQsImV4cCI6MTU1ODM0OTIxNCwiYXVkIjoiYW5kcm9pZC1nYXRld2F5IiwiaXNzIjoidXNlci1zZXJ2aWNlLmp3dC1tYW5hZ2VyLmF1dGgiLCJzdWIiOiJnZW5lcmFsLXJlc291cmNlLWF1dGhvcml6YXRpb24ifQ.b-sQjRKaMAGDj9OyGa4OprU74MQLP4VdQFZ1_6GeO_w')
       //.end(function(error, response, body) {
               
        .then(function(response){     
            
            expect(response.statusCode).to.equal(200);


          });

   });
});