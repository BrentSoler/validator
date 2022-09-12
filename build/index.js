"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MODES;
(function (MODES) {
    MODES["NORMAL"] = "NORMAL";
    MODES["PARTIAL"] = "PARTIAL";
    MODES["SPECIFIC"] = "SPECIFIC";
})(MODES || (MODES = {}));
class Validator {
    constructor(data) {
        this.Obj = {};
        this.REQUIRED = [];
        this.Obj = data;
    }
    register(feild) {
        if (typeof feild === "string") {
            this.REQUIRED = [...this.REQUIRED, feild];
            return;
        }
        this.REQUIRED = [...this.REQUIRED, ...feild];
    }
    validate(msg, options) {
        var _a;
        if (!options) {
            this.normalValidate(msg);
            return;
        }
        const mode = (_a = options === null || options === void 0 ? void 0 : options.mode) === null || _a === void 0 ? void 0 : _a.toUpperCase();
        if (mode === MODES.PARTIAL) {
            if (!(options === null || options === void 0 ? void 0 : options.requiredPartial)) {
                throw new Error("Mode is Partial: need to provide a requiredPartial key in options");
            }
            this.partialValidate(options === null || options === void 0 ? void 0 : options.requiredPartial, msg);
            return;
        }
        if (mode === MODES.SPECIFIC) {
            if (!(options === null || options === void 0 ? void 0 : options.specificKey)) {
                throw new Error("Mode is Specific: need to provide a specificKey key in options");
            }
            this.specificValidate(options === null || options === void 0 ? void 0 : options.specificKey, msg);
            return;
        }
        this.normalValidate(msg);
    }
    normalValidate(msg) {
        this.REQUIRED.forEach((feild) => {
            if (!this.Obj[feild]) {
                throw new Error(msg ? msg : `Missing Fields`);
            }
        });
    }
    partialValidate(required, msg) {
        const history = [];
        this.REQUIRED.forEach((feild) => {
            if (!this.Obj[feild]) {
                history.push(false);
                return;
            }
            history.push(true);
        });
        let returned = 0;
        history.forEach((bool) => {
            if (bool) {
                returned += 1;
            }
        });
        if (required > returned) {
            throw new Error(msg ? msg : `Missing Fields`);
        }
    }
    specificValidate(feild, msg) {
        if (!this.Obj[feild]) {
            throw new Error(msg ? msg : `${feild} is Missing`);
        }
    }
}
exports.default = Validator;
//# sourceMappingURL=index.js.map