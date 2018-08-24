var qs = require("querystring");
var http = require("https");

var options = {
  "method": "POST",
  "hostname": [
    "testapi",
    "fortum",
    "com"
  ],
  "path": [
    "TSU",
    "v1",
    "Web2Leads"
  ],
  "headers": {
    "Content-Type": "application/x-www-form-urlencoded",
    "RequestingSystem": "WEB",
    "TargetSystem": "TSU",
    "Cache-Control": "no-cache",
    "Postman-Token": "a1437f37-9a88-4675-bcc7-0949d5afdf5b"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(qs.stringify({ CipherText: 'tNR4HLTUYLJSoWZU%2BdaeaauEaYeRHjH3aHhybr8ZfdfhAy5QXKPe47ANQGNHFAVIc6%2FNij9WGDYq3oe5nHIAAP5SSqgopLlr94%2FekK9FRsg%3D&Type=',
  FirstName: 'Dilek',
  LastName: 'Konduk',
  EmailAddress: 'dilek.konduk@test007.com',
  MobilePhone: '07392612121212',
  AdditionalInfo1: '1100110055' }));
req.end();