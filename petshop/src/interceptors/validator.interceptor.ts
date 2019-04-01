import { NestInterceptor, Injectable, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Contract } from '../backoffice/contracts/contract';
import { Result } from '../backoffice/models/result.model';

@Injectable()
export class ValidatorInterceptor implements NestInterceptor {
    constructor(public contract: Contract) {}

    intercept(context: ExecutionContext, call$: Observable<any>): Observable<any> {
        const body = context.switchToHttp().getRequest().body;
        const valid = this.contract.validate(body);

        if (!valid) {
            throw new HttpException(
                new Result('Algo saiu errado.', false, {}, this.contract.errors),
                HttpStatus.BAD_REQUEST);
        }

        return call$;
    }
}
