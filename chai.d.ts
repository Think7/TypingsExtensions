/**
 * Created by andrewialacci on 2/4/16.
 */

declare module "chai" {
    export class Request {
        public static someStatic(): void;
        public someInstance(): void;
    }
}

