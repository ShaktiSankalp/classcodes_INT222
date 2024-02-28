const url = require("url");
const urlString = 
"http://example.com/path?foo=bar&baz=qux";
// const parsedUrl = url.parse(urlString);
const parsedUrl = url.parse(urlString,true);
console.log(parsedUrl.pathname);
console.log(parsedUrl.query.foo);  



//querystring module

const querystring = require('querystring');

const queryString = 'foo=bar&baz=qux';
const parsedQuery = querystring.parse(queryString);

console.log(parsedQuery);