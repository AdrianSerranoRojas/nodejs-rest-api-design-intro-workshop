const Router = require("express").Router;

const { authMiddleware } = require("../middleware/auth-middleware");
const userController = require("../controllers/user-controller");

const UserRouter = Router();

UserRouter.use("/users", authMiddleware);

UserRouter.get("/users", userController.getUsers);
UserRouter.get("/users/:userId", userController.getUserDetails);
UserRouter.post("/users/", userController.createUser);
UserRouter.patch("/users/:userId", userController.updateUser);
UserRouter.delete("/users/:userId", userController.deleteUser);
UserRouter.post("/sign-up", authMiddleware, userController.signUp);

module.exports = UserRouter;
