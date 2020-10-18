import { Resolver, Query } from '@nestjs/graphql';
import { User } from './entity/User';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {

    constructor(private readonly usersService: UsersService) { }

    @Query(() => String)
    async hello() {
        return 'hello';
    }
    @Query(() => Number)
    async getNumber() {
        return 1;
    }

    @Query(() => [User])
    async getAllUsers() {
        return this.usersService.getAllUsers();
    }
}
