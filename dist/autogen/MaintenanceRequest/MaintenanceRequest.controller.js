"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceRequestController = void 0;
const common_1 = require("@nestjs/common");
const crud_1 = require("@nestjsx/crud");
const swagger_1 = require("@nestjs/swagger");
const MaintenanceRequest_dto_1 = require("./dtos/MaintenanceRequest.dto");
const MaintenanceRequest_service_1 = require("./MaintenanceRequest.service");
let MaintenanceRequestController = class MaintenanceRequestController {
    constructor(service) {
        this.service = service;
    }
    get base() {
        return this;
    }
    getMany(req) {
        return this.base.getManyBase(req);
    }
    get(req) {
        return this.base.getOneBase(req);
    }
    create(req, dto) {
        return this.base.createOneBase(req, dto);
    }
    createMany(req, dto) {
        return this.base.createManyBase(req, dto);
    }
    update(req, dto) {
        return this.base.updateOneBase(req, dto);
    }
    replace(req, dto) {
        return this.base.replaceOneBase(req, dto);
    }
    delete(req) {
        return this.base.deleteOneBase(req);
    }
};
exports.MaintenanceRequestController = MaintenanceRequestController;
__decorate([
    (0, crud_1.Override)('getManyBase'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve multiple MaintenanceRequests' }),
    __param(0, (0, crud_1.ParsedRequest)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MaintenanceRequestController.prototype, "getMany", null);
__decorate([
    (0, crud_1.Override)('getOneBase'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve a single MaintenanceRequest' }),
    __param(0, (0, crud_1.ParsedRequest)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MaintenanceRequestController.prototype, "get", null);
__decorate([
    (0, crud_1.Override)('createOneBase'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a single MaintenanceRequest' }),
    (0, swagger_1.ApiBody)({
        type: MaintenanceRequest_dto_1.MaintenanceRequestCreate,
        description: 'The Description for the Post Body. Please look into the DTO. You will see the @ApiOptionalProperty used to define the Schema.',
    }),
    __param(0, (0, crud_1.ParsedRequest)()),
    __param(1, (0, crud_1.ParsedBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, MaintenanceRequest_dto_1.MaintenanceRequest]),
    __metadata("design:returntype", void 0)
], MaintenanceRequestController.prototype, "create", null);
__decorate([
    (0, crud_1.Override)('createManyBase'),
    (0, swagger_1.ApiOperation)({ summary: 'Create multipleMaintenanceRequests' }),
    __param(0, (0, crud_1.ParsedRequest)()),
    __param(1, (0, crud_1.ParsedBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], MaintenanceRequestController.prototype, "createMany", null);
__decorate([
    (0, crud_1.Override)('updateOneBase'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a single MaintenanceRequest' }),
    __param(0, (0, crud_1.ParsedRequest)()),
    __param(1, (0, crud_1.ParsedBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, MaintenanceRequest_dto_1.MaintenanceRequest]),
    __metadata("design:returntype", void 0)
], MaintenanceRequestController.prototype, "update", null);
__decorate([
    (0, crud_1.Override)('replaceOneBase'),
    (0, swagger_1.ApiOperation)({ summary: 'Replace a single MaintenanceRequest' }),
    __param(0, (0, crud_1.ParsedRequest)()),
    __param(1, (0, crud_1.ParsedBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, MaintenanceRequest_dto_1.MaintenanceRequest]),
    __metadata("design:returntype", void 0)
], MaintenanceRequestController.prototype, "replace", null);
__decorate([
    (0, crud_1.Override)('deleteOneBase'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a single MaintenanceRequest' }),
    __param(0, (0, crud_1.ParsedRequest)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MaintenanceRequestController.prototype, "delete", null);
exports.MaintenanceRequestController = MaintenanceRequestController = __decorate([
    (0, crud_1.Crud)({
        model: {
            type: MaintenanceRequest_dto_1.MaintenanceRequest,
        },
        dto: {
            create: MaintenanceRequest_dto_1.MaintenanceRequestCreate,
            update: MaintenanceRequest_dto_1.MaintenanceRequest,
            replace: MaintenanceRequest_dto_1.MaintenanceRequest,
        },
        query: {
            limit: 5,
            alwaysPaginate: true,
        },
    }),
    (0, common_1.Controller)('MaintenanceRequests'),
    (0, swagger_1.ApiTags)('MaintenanceRequests'),
    __metadata("design:paramtypes", [MaintenanceRequest_service_1.MaintenanceRequestService])
], MaintenanceRequestController);
//# sourceMappingURL=MaintenanceRequest.controller.js.map