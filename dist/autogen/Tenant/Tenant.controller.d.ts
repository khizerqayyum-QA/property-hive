import { CrudController, CrudRequest, CreateManyDto } from '@nestjsx/crud';
import { Tenant } from './dtos/Tenant.dto';
import { TenantService } from './Tenant.service';
export declare class TenantController implements CrudController<Tenant> {
    service: TenantService;
    constructor(service: TenantService);
    get base(): CrudController<Tenant>;
    getMany(req: CrudRequest): Promise<import("@nestjsx/crud").GetManyDefaultResponse<Tenant> | Tenant[]>;
    get(req: CrudRequest): Promise<Tenant>;
    create(req: CrudRequest, dto: Tenant): Promise<Tenant>;
    createMany(req: CrudRequest, dto: CreateManyDto<Tenant>): Promise<Tenant[]>;
    update(req: CrudRequest, dto: Tenant): Promise<Tenant>;
    replace(req: CrudRequest, dto: Tenant): Promise<Tenant>;
    delete(req: CrudRequest): Promise<void | Tenant>;
}
