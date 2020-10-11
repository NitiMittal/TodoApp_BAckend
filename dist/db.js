"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var DB = /** @class */ (function () {
    function DB() {
    }
    DB.ConnectMongoDB = function () {
        mongoose_1.default.connect(this.connectionString, function (err) {
            if (err) {
                console.log("error while connecting to mongodb");
            }
            else {
                console.log("Connected to MongoDB");
            }
        });
    };
    DB.connectionString = "mongodb://localhost:27017/TodoApp";
    return DB;
}());
exports.DB = DB;
//# sourceMappingURL=db.js.map