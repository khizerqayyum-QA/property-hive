"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const Tenant_dto_1 = require("./dtos/Tenant.dto");
const Tenant_controller_1 = require("./Tenant.controller");
const Tenant_service_1 = require("./Tenant.service");
const baseRequest = {
    parsed: {
        fields: [],
        paramsFilter: [],
        search: {},
        filter: [],
        or: [],
        join: [],
        sort: [],
        authPersist: undefined,
        limit: 10,
        offset: 0,
        page: 1,
        cache: undefined,
    },
    options: {},
};
describe('TenantController', () => {
    let controller;
    let spyService;
    beforeEach(async () => {
        const ApiServiceProvider = {
            provide: Tenant_service_1.TenantService,
            useFactory: () => ({
                createOne: jest.fn(() => []),
                getOne: jest.fn(() => { }),
            }),
        };
        const module = await testing_1.Test.createTestingModule({
            controllers: [Tenant_controller_1.TenantController],
            providers: [Tenant_service_1.TenantService, ApiServiceProvider],
        }).compile();
        controller = module.get(Tenant_controller_1.TenantController);
        spyService = module.get(Tenant_service_1.TenantService);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
    it('should call TenantController get method', () => {
        const req = Object.assign({}, baseRequest);
        expect(controller.get(req)).not.toEqual(null);
        expect(spyService.getOne).toHaveBeenCalled();
    });
    it('should call TenantController create method', () => {
        const req = Object.assign({}, baseRequest);
        const dto = new Tenant_dto_1.Tenant();
        controller.create(req, dto);
        expect(controller.create(req, dto)).not.toEqual(null);
        expect(spyService.createOne).toHaveBeenCalled();
    });
});
//# sourceMappingURL=Tenant.controller.spec.js.map