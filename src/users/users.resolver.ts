import { Resolver, Query } from '@nestjs/graphql';
import { User } from './entity/user.entities';

@Resolver()
export class UsersResolver {
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
        return [
            {
                id: 1,
                name: 'kdj',
                age: 27,
                gender: 'male'
            },
            {
                id: 2,
                name: 'jsy',
                age: 25,
                gender: 'female'
            }
        ]
    }
}
