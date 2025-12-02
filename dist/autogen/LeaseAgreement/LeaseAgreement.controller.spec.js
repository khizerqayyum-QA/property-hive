"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const LeaseAgreement_dto_1 = require("./dtos/LeaseAgreement.dto");
const LeaseAgreement_controller_1 = require("./LeaseAgreement.controller");
const LeaseAgreement_service_1 = require("./LeaseAgreement.service");
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
describe('LeaseAgreementController', () => {
    let controller;
    let spyService;
    beforeEach(async () => {
        const ApiServiceProvider = {
            provide: LeaseAgreement_service_1.LeaseAgreementService,
            useFactory: () => ({
                createOne: jest.fn(() => []),
                getOne: jest.fn(() => { }),
            }),
        };
        const module = await testing_1.Test.createTestingModule({
            controllers: [LeaseAgreement_controller_1.LeaseAgreementController],
            providers: [LeaseAgreement_service_1.LeaseAgreementService, ApiServiceProvider],
        }).compile();
        controller = module.get(LeaseAgreement_controller_1.LeaseAgreementController);
        spyService = module.get(LeaseAgreement_service_1.LeaseAgreementService);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
    it('should call LeaseAgreementController get method', () => {
        const req = Object.assign({}, baseRequest);
        expect(controller.get(req)).not.toEqual(null);
        expect(spyService.getOne).toHaveBeenCalled();
    });
    it('should call LeaseAgreementController create method', () => {
        const req = Object.assign({}, baseRequest);
        const dto = new LeaseAgreement_dto_1.LeaseAgreement();
        controller.create(req, dto);
        expect(controller.create(req, dto)).not.toEqual(null);
        expect(spyService.createOne).toHaveBeenCalled();
    });
});
//# sourceMappingURL=LeaseAgreement.controller.spec.js.map