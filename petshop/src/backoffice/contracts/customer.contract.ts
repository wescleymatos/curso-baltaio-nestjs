import { Injectable } from '@nestjs/common';
import { Contract } from './contract';
import { Flunt } from '../../utils/flunt';
import { CreateCustomerDto } from '../dtos/create-customer.dto';

@Injectable()
export class CreateCustomerContract implements Contract {
    errors: any[];

    validate(model: CreateCustomerDto): boolean {
        const flunt = new Flunt();

        flunt.hasMinLen(model.name, 5, 'Nome inválido.');
        flunt.isFixedLen(model.document, 11, 'CPF inválido.');
        flunt.isEmail(model.email, 'Email inválido.');
        flunt.hasMinLen(model.password, 6, 'Senha inválida.');

        this.errors = flunt.errors;
        return flunt.isValid();
    }
}
