/// <reference path="../chai-http.d.ts" />

import {RequestEx} from "chai-http";

let req = new RequestEx();

RequestEx.someStatic();
RequestEx.someStatic();
req.someInstance();
req.someInstanceEx();









