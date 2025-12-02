"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaseAgreementModule = void 0;
const common_1 = require("@nestjs/common");
const LeaseAgreement_entity_1 = require("./LeaseAgreement.entity");
const typeorm_1 = require("@nestjs/typeorm");
const LeaseAgreement_service_1 = require("./LeaseAgreement.service");
const LeaseAgreement_controller_1 = require("./LeaseAgreement.controller");
let LeaseAgreementModule = class LeaseAgreementModule {
};
exports.LeaseAgreementModule = LeaseAgreementModule;
exports.LeaseAgreementModule = LeaseAgreementModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([LeaseAgreement_entity_1.LeaseAgreement])],
        providers: [LeaseAgreement_service_1.LeaseAgreementService],
        exports: [LeaseAgreement_service_1.LeaseAgreementService],
        controllers: [LeaseAgreement_controller_1.LeaseAgreementController],
    })
], LeaseAgreementModule);
//# sourceMappingURL=LeaseAgreement.module.js.map