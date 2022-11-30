const UserController = require("./../controllers/userController");

console.log(UserController.name);

UserController.name = "Richard Roe";

console.log(UserController.name);
