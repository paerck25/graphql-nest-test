import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { User } from './entity/User';
import { UsersService } from './users.service';
import { CreateUser } from './dto/create-user.dto'

@Resolver()
export class UsersResolver {

    constructor(private readonly usersService: UsersService) { }

    @Query(() => [User])
    async getAllUsers() {
        return await this.usersService.getAllUsers();
    }

    @Mutation(() => User)
    async createUser(@Args('user') user: CreateUser) {
        return await this.usersService.createUser(user);
    }
}
