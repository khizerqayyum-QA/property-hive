import { CrudController, CrudRequest, CreateManyDto } from '@nestjsx/crud';
import { LeaseAgreement } from './dtos/LeaseAgreement.dto';
import { LeaseAgreementService } from './LeaseAgreement.service';
export declare class LeaseAgreementController implements CrudController<LeaseAgreement> {
    service: LeaseAgreementService;
    constructor(service: LeaseAgreementService);
    get base(): CrudController<LeaseAgreement>;
    getMany(req: CrudRequest): Promise<import("@nestjsx/crud").GetManyDefaultResponse<LeaseAgreement> | LeaseAgreement[]>;
    get(req: CrudRequest): Promise<LeaseAgreement>;
    create(req: CrudRequest, dto: LeaseAgreement): Promise<LeaseAgreement>;
    createMany(req: CrudRequest, dto: CreateManyDto<LeaseAgreement>): Promise<LeaseAgreement[]>;
    update(req: CrudRequest, dto: LeaseAgreement): Promise<LeaseAgreement>;
    replace(req: CrudRequest, dto: LeaseAgreement): Promise<LeaseAgreement>;
    delete(req: CrudRequest): Promise<void | LeaseAgreement>;
}
