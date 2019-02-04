import { Controller, Get, Post, Put, Delete, Param, Body, UseInterceptors } from '@nestjs/common';
import { Result } from '../models/result.model';
import { ValidatorInterceptor } from 'src/interceptors/validator.interceptor';
import { CreateCustomerContract } from '../contracts/customer.contract';
import { CreateCustomerDto } from '../dtos/create-customer.dto';

@Controller('v1/customers')
export class CustomerController {
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
    post(@Body() body: CreateCustomerDto) {
        return new Result('Cliente atualizado com sucesso', true, body, []);
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
