import { Controller, Get, Post, Put, Delete, Param, Body, UseInterceptors } from '@nestjs/common';
import { Result } from '../models/result.model';
import { ValidatorInterceptor } from 'src/interceptors/validator.interceptor';
import { CreateCustomerContract } from '../contracts/customer.contract';
import { CreateCustomerDto } from '../dtos/create-customer.dto';
import { AccountService } from '../services/account.service';
import { User } from '../models/user.model';

@Controller('v1/customers')
export class CustomerController {
    constructor(
        private readonly accountServive: AccountService
    ) {    
    }

    @Get()
    get() {
        return new Result('', true, [], []);
    }

    @Get(':document')
    getById(@Param('document') document) {
        return new Result('', true, {}, []);
    }

    @Post()
    @UseInterceptors(new ValidatorInterceptor(new CreateCustomerContract()))
    async post(@Body() model: CreateCustomerDto) {
        const user = await this.accountServive.create(new User(model.document, model.password, true));
        return new Result('Cliente atualizado com sucesso', true, user, []);
    }

    @Put(':document')
    put(@Param('document') document, @Body() body) {
        return new Result('Cliente atualizado com sucesso', true, body, []);
    }

    @Delete(':document')
    delete(@Param('document') document) {
        return new Result('Cliente removido com sucesso', true, document, []);
    }
}
