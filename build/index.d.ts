import { TOption, TTObject } from "./types/validatorTypes";
export default class Validator {
    Obj: TTObject;
    private REQUIRED;
    constructor(data: TTObject);
    register(feild: string | Array<string>): void;
    validate(msg?: string, options?: TOption): void;
    private normalValidate;
    private partialValidate;
    private specificValidate;
}
