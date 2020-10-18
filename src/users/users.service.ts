import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/User';
import { CreateUser } from './dto/create-user.dto'

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User) private usersRepository: Repository<User>
    ) { }

    async getAllUsers() {
        return await this.usersRepository.find();
    }

    async createUser(user: CreateUser) {
        const result = await this.usersRepository.create(user);
        return await this.usersRepository.save(result);
    }
}
