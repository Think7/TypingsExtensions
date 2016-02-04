/// <reference path="./chai.d.ts" />
// ^^^ Reference the parent def that we will extend.

declare module "chai-http" {
    import {Request} from "chai";
    // Import the class we will extend
    // from the referenced parent def.

    export class RequestEx extends Request {
        public static someStaticEx(): void;
        public someInstanceEx(): void;
    }
}


