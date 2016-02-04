/// <reference path="./chai.d.ts" />
// ^^^ Reference the parent def that we will extend.

declare module "chai-http" {
    import * as chai from "chai";
    // Import the class we will extend
    // from the referenced parent def.

    export class Request extends chai.Request {
        public static someStaticEx(): void;
        public someInstanceEx(): void;
    }
}


