#body2Query
convert json object to querystring

## Install
```
npm install body-to-query
```

## Quick Example
```
var body2Query = require('body-to-query').body2Query;

var json = {
  firstName: 'Phil',
  lastName: 'Huang'
}

body2Query(json)  // ?firstName=Phil&lastName=Huang
```
