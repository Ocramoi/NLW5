import { Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController"
import { UsersController } from "./controllers/UsersController";

const routes = Router(),
      settingsController = new SettingsController(),
      usersController = new UsersController(),
      messagesController = new MessagesController();

routes.post("/settings", settingsController.create);
routes.post("/users", usersController.create);
routes.post("/messages", messagesController.create);

export { routes };
