import { CrudController, CrudRequest, CreateManyDto } from '@nestjsx/crud';
import { MaintenanceRequest } from './dtos/MaintenanceRequest.dto';
import { MaintenanceRequestService } from './MaintenanceRequest.service';
export declare class MaintenanceRequestController implements CrudController<MaintenanceRequest> {
    service: MaintenanceRequestService;
    constructor(service: MaintenanceRequestService);
    get base(): CrudController<MaintenanceRequest>;
    getMany(req: CrudRequest): Promise<import("@nestjsx/crud").GetManyDefaultResponse<MaintenanceRequest> | MaintenanceRequest[]>;
    get(req: CrudRequest): Promise<MaintenanceRequest>;
    create(req: CrudRequest, dto: MaintenanceRequest): Promise<MaintenanceRequest>;
    createMany(req: CrudRequest, dto: CreateManyDto<MaintenanceRequest>): Promise<MaintenanceRequest[]>;
    update(req: CrudRequest, dto: MaintenanceRequest): Promise<MaintenanceRequest>;
    replace(req: CrudRequest, dto: MaintenanceRequest): Promise<MaintenanceRequest>;
    delete(req: CrudRequest): Promise<void | MaintenanceRequest>;
}
