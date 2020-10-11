"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todoservice_1 = require("../services/todoservice");
var Routes = /** @class */ (function () {
    function Routes() {
    }
    Routes.RegisterAPIs = function (app) {
        app.get("/", todoservice_1.TodoService.GetAllTodos);
        app.get("/:todoId", todoservice_1.TodoService.GetTodoByID);
        app.post("/createTodo", todoservice_1.TodoService.CreateTodo);
        app.delete("/todo/:todoId", todoservice_1.TodoService.DeleteTodo);
        app.put("/todo/:todoId", todoservice_1.TodoService.UpdateTodo);
    };
    return Routes;
}());
exports.Routes = Routes;
//# sourceMappingURL=route.js.map