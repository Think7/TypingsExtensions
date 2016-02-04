/// <reference path="../chai-http.d.ts" />
var chai_http_1 = require("chai-http");
var req = new chai_http_1.Request();
chai_http_1.Request.someStatic();
chai_http_1.Request.someStaticEx();
req.someInstance();
req.someInstanceEx();
