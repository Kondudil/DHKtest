var unirest = require("unirest");

var req = unirest("POST", "https://testapi.fortum.com/TSU/v1/Web2Leads");

req.headers({
  "Postman-Token": "04b90ab1-42a6-4897-8c96-3551dd30d162",
  "Cache-Control": "no-cache",
  "TargetSystem": "TSU",
  "RequestingSystem": "WEB",
  "Content-Type": "application/x-www-form-urlencoded"
});

req.form({
  "CipherText": "tNR4HLTUYLJSoWZU%2BdaeaauEaYeRHjH3aHhybr8ZfdfhAy5QXKPe47ANQGNHFAVIc6%2FNij9WGDYq3oe5nHIAAP5SSqgopLlr94%2FekK9FRsg%3D&Type=",
  "FirstName": "Dilek",
  "LastName": "Konduk",
  "EmailAddress": "dilek.konduk@test007.com",
  "MobilePhone": "07392612121212",
  "AdditionalInfo1": "1100110055"
});

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});