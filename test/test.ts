/// <reference path="../chai-http.d.ts" />

import {Request} from "chai-http";

let req = new Request();

Request.someStatic();
Request.someStaticEx();
req.someInstance();
req.someInstanceEx();








