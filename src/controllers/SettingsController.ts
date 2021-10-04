import { Request, response, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";
import { SettingsService } from "../services/SettingsService";

class SettingsController {
    async create(req: Request, resp: Response) {
        const settingsRepository = getCustomRepository(SettingsRepository),
            { chat, username } = req.body;

        try {
            const settingsService = new SettingsService(),
                  settings = await settingsService.create({ chat, username });

            return resp.json(settings);
        } catch(err) {
            return response.status(400).json({
                message: err.message
            });
        }
    }
}

export { SettingsController };
