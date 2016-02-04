/// <reference path="../chai-http.d.ts" />

import {Request} from "chai-http";

let req = new Request();

Request.someStatic();
Request.someStatic();
req.someInstance();
req.someInstanceEx();








