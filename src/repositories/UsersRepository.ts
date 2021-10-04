import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User"
import { UsersService } from "../services/UsersService";

@EntityRepository(User)
class UsersRepository extends Repository<User> {
}

export { UsersRepository };
