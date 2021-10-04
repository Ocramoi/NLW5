import { Request, Response } from "express";
import { MessagesService } from "../services/MessagesService";

class MessagesController {
    async create(req: Request, resp: Response) {
        const { admin_id, text, user_id }= req.body,
              messagesService = new MessagesService();

        const message = await messagesService.create({
            admin_id,
            text,
            user_id
        });

        return resp.json(message);
    }
}

export { MessagesController };
