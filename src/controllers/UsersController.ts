import { Request, Response } from "express";
import { UsersService } from "../services/UsersService";

class UsersController {
    async create(req: Request, resp: Response) {
        const { email } = req.body,
              usersService = new UsersService();

        const user = await usersService.create(email);
        return resp.json(user);
    }
}

export { UsersController };
