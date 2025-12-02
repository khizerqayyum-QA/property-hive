import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { QueryOptions } from '@nestjsx/crud';
import { ParsedRequestParams } from '@nestjsx/crud-request';
import { MaintenanceRequest } from './MaintenanceRequest.entity';
export declare class MaintenanceRequestService extends TypeOrmCrudService<MaintenanceRequest> {
    constructor(repo: any);
    getSelect(query: ParsedRequestParams, options: QueryOptions): string[];
}
