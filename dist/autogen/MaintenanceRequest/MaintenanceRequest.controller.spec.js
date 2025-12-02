"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const MaintenanceRequest_dto_1 = require("./dtos/MaintenanceRequest.dto");
const MaintenanceRequest_controller_1 = require("./MaintenanceRequest.controller");
const MaintenanceRequest_service_1 = require("./MaintenanceRequest.service");
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
describe('MaintenanceRequestController', () => {
    let controller;
    let spyService;
    beforeEach(async () => {
        const ApiServiceProvider = {
            provide: MaintenanceRequest_service_1.MaintenanceRequestService,
            useFactory: () => ({
                createOne: jest.fn(() => []),
                getOne: jest.fn(() => { }),
            }),
        };
        const module = await testing_1.Test.createTestingModule({
            controllers: [MaintenanceRequest_controller_1.MaintenanceRequestController],
            providers: [MaintenanceRequest_service_1.MaintenanceRequestService, ApiServiceProvider],
        }).compile();
        controller = module.get(MaintenanceRequest_controller_1.MaintenanceRequestController);
        spyService = module.get(MaintenanceRequest_service_1.MaintenanceRequestService);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
    it('should call MaintenanceRequestController get method', () => {
        const req = Object.assign({}, baseRequest);
        expect(controller.get(req)).not.toEqual(null);
        expect(spyService.getOne).toHaveBeenCalled();
    });
    it('should call MaintenanceRequestController create method', () => {
        const req = Object.assign({}, baseRequest);
        const dto = new MaintenanceRequest_dto_1.MaintenanceRequest();
        controller.create(req, dto);
        expect(controller.create(req, dto)).not.toEqual(null);
        expect(spyService.createOne).toHaveBeenCalled();
    });
});
//# sourceMappingURL=MaintenanceRequest.controller.spec.js.map