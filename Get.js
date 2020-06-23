var chai = require('chai');
var chaiHttp = require('chai-http');
const should = require("should");
const request = require("request");
var expect = require("chai").expect;
var baseUrl = "https://qa-api.imahila.in:443";
const util = require("util");

chai.use(chaiHttp);

describe('Working expect', function() {
   it('Working expect', function() {
       chai.request(baseUrl)
       .get('/api/v1/preferences')
       .query({limit : 3, offset: 0, languageId: '5c39a78eb4fed13fe73b3a85', fields: 'name,description,coverImage'})
       .auth('Authorization','Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVjOTQ3ZjUxNDAzODdlMDNhMDhjZjYxOSIsInBob25lIjo5NzkxMzMxMjgwLCJsYW5ndWFnZSI6IjVjMzlhMTVmYjRmZWQxM2ZlNzNiM2E4NCIsInByZWZlcmVuY2VzIjpbIjVjNWQ3NzQyMGM0NjQzMDE0OWMxOGIxNSJdLCJyb2xlcyI6WyJ1c2VyIl19LCJkZXZpY2UiOiI1YzliMjViMjJiNDAwOTNhZmY1M2RlZWMiLCJpYXQiOjE1NTgzNDA3NDksImV4cCI6MTU1ODM0MTA0OSwiYXVkIjoiYW5kcm9pZC1nYXRld2F5IiwiaXNzIjoidXNlci1zZXJ2aWNlLmp3dC1tYW5hZ2VyLmF1dGgiLCJzdWIiOiJnZW5lcmFsLXJlc291cmNlLWF1dGhvcml6YXRpb24ifQ.W6-S5_vfW9P0ZzsrjrK_KRrfnH_kWvo389DwJiwTNSU')
       .set('X-Device-Identifier','5c9b25b22b40093aff53deec')
       .end(function(error, response, body) {
               //const bodyObj = JSON.parse(body);
               //expect(response.header).to.have.property('X-Device-Identifier',"5ca494062b40093aff53e03b")
               expect(response.statusCode).to.equal(200);
               //expect(bodyObj[0].id).to.equal("58562");
               //console.log(body);
           });

   });
});