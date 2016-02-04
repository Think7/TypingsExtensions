/// <reference path="../chai-http.d.ts" />
var chai_http_1 = require("chai-http");
var req = new chai_http_1.RequestEx();
chai_http_1.RequestEx.someStatic();
chai_http_1.RequestEx.someStatic();
req.someInstance();
req.someInstanceEx();
