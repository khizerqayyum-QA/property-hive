import { CrudController, CrudRequest, CreateManyDto } from '@nestjsx/crud';
import { Property } from './dtos/Property.dto';
import { PropertyService } from './Property.service';
export declare class PropertyController implements CrudController<Property> {
    service: PropertyService;
    constructor(service: PropertyService);
    get base(): CrudController<Property>;
    getMany(req: CrudRequest): Promise<import("@nestjsx/crud").GetManyDefaultResponse<Property> | Property[]>;
    get(req: CrudRequest): Promise<Property>;
    create(req: CrudRequest, dto: Property): Promise<Property>;
    createMany(req: CrudRequest, dto: CreateManyDto<Property>): Promise<Property[]>;
    update(req: CrudRequest, dto: Property): Promise<Property>;
    replace(req: CrudRequest, dto: Property): Promise<Property>;
    delete(req: CrudRequest): Promise<void | Property>;
}
