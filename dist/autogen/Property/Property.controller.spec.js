"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const Property_dto_1 = require("./dtos/Property.dto");
const Property_controller_1 = require("./Property.controller");
const Property_service_1 = require("./Property.service");
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
describe('PropertyController', () => {
    let controller;
    let spyService;
    beforeEach(async () => {
        const ApiServiceProvider = {
            provide: Property_service_1.PropertyService,
            useFactory: () => ({
                createOne: jest.fn(() => []),
                getOne: jest.fn(() => { }),
            }),
        };
        const module = await testing_1.Test.createTestingModule({
            controllers: [Property_controller_1.PropertyController],
            providers: [Property_service_1.PropertyService, ApiServiceProvider],
        }).compile();
        controller = module.get(Property_controller_1.PropertyController);
        spyService = module.get(Property_service_1.PropertyService);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
    it('should call PropertyController get method', () => {
        const req = Object.assign({}, baseRequest);
        expect(controller.get(req)).not.toEqual(null);
        expect(spyService.getOne).toHaveBeenCalled();
    });
    it('should call PropertyController create method', () => {
        const req = Object.assign({}, baseRequest);
        const dto = new Property_dto_1.Property();
        controller.create(req, dto);
        expect(controller.create(req, dto)).not.toEqual(null);
        expect(spyService.createOne).toHaveBeenCalled();
    });
});
//# sourceMappingURL=Property.controller.spec.js.map