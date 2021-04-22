import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController"

const routes = Router(),
      settingsController = new SettingsController();

routes.post("/settings", settingsController.create);

export { routes };
