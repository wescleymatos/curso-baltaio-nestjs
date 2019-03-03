import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../models/user.model';

@Injectable()
export class AccountService {
    constructor(
        @InjectModel('User') private readonly model: Model<User> 
    ) {
        
    }

    async create(data: User): Promise<User>  {
        const userSchema = new this.model(data);
        return await userSchema.save();
    } 
}