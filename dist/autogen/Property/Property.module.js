"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyModule = void 0;
const common_1 = require("@nestjs/common");
const Property_entity_1 = require("./Property.entity");
const typeorm_1 = require("@nestjs/typeorm");
const Property_service_1 = require("./Property.service");
const Property_controller_1 = require("./Property.controller");
let PropertyModule = class PropertyModule {
};
exports.PropertyModule = PropertyModule;
exports.PropertyModule = PropertyModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Property_entity_1.Property])],
        providers: [Property_service_1.PropertyService],
        exports: [Property_service_1.PropertyService],
        controllers: [Property_controller_1.PropertyController],
    })
], PropertyModule);
//# sourceMappingURL=Property.module.js.map