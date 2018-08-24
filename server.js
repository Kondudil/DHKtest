 var request = require('request')
  request({
    // will be ignored
    method: 'GET',
    uri: 'http://www.google.com',

    // HTTP Archive Request Object
    har: {
      url: 'https://testapi.fortum.com/TSU/v1/Web2Leads/',
      method: 'POST',
      headers: [
        {
          name: 'content-type',
          value: 'application/x-www-form-urlencoded'
        }
      ],
      postData: {
        mimeType: 'application/x-www-form-urlencoded',
        params: [
          {
            name: 'CipherText',
            value: 'tNR4HLTUYLJSoWZU%2BdaeaauEaYeRHjH3aHhybr8ZfdfhAy5QXKPe47ANQGNHFAVIc6%2FNij9WGDYq3oe5nHIAAP5SSqgopLlr94%2FekK9FRsg%3D&Type='
          },
          {
            name: 'FirstName',
            value: 'DILEKKK'
          },
          {
            name: 'LastName',
            value: 'Konduk'
          },
          {
            name: 'MobilePhone',
            value: '07392612121212'
          }
		  
        ]
      }
    }
  })

  // a POST request will be sent to http://www.mockbin.com
  // with body an application/x-www-form-urlencoded body:
  // foo=bar&hello=world