const UserController = require("./../controllers/userController");

const userController = new UserController("John Doe");

console.log(userController.tmpName);
