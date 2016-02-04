/// <reference path="../chai-http.d.ts" />
var chai_http_1 = require("chai-http");
var req = new chai_http_1.Request();
chai_http_1.Request.someStatic();
chai_http_1.Request.someStatic();
req.someInstance();
req.someInstanceEx();
