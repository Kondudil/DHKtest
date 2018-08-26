var request = require("request");

var options = { method: 'POST',
  url: 'https://testapi.fortum.com/TSU/v1/Web2Leads',
  headers: 
   { 'Postman-Token': '2b39082d-ba67-41d8-ad1f-55f37dbe3bf5',
     'Cache-Control': 'no-cache',
     TargetSystem: 'TSU',
     RequestingSystem: 'WEB',
     'Content-Type': 'application/x-www-form-urlencoded' },
  form: 
   { CipherText: 'tNR4HLTUYLJSoWZU%2BdaeaauEaYeRHjH3aHhybr8ZfdfhAy5QXKPe47ANQGNHFAVIc6%2FNij9WGDYq3oe5nHIAAP5SSqgopLlr94%2FekK9FRsg%3D&Type=',
     FirstName: 'Dilek',
     LastName: 'Konduk',
     EmailAddress: 'dilek.konduk@test007.com',
     MobilePhone: '07392612121212',
     AdditionalInfo1: '1100110055' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
