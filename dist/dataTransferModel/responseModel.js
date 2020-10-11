"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResponseModel = /** @class */ (function () {
    function ResponseModel(isValid, data, err) {
        this.isValid = false;
        this.isValid = isValid;
        this.data = data;
        this.error = err;
    }
    return ResponseModel;
}());
exports.ResponseModel = ResponseModel;
//# sourceMappingURL=responseModel.js.map