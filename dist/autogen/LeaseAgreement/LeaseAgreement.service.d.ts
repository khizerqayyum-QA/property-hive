import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { QueryOptions } from '@nestjsx/crud';
import { ParsedRequestParams } from '@nestjsx/crud-request';
import { LeaseAgreement } from './LeaseAgreement.entity';
export declare class LeaseAgreementService extends TypeOrmCrudService<LeaseAgreement> {
    constructor(repo: any);
    getSelect(query: ParsedRequestParams, options: QueryOptions): string[];
}
