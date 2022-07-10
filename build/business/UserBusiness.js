"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userData_1 = __importDefault(require("../data/userData"));
const GenerateId_1 = __importDefault(require("../services/GenerateId"));
const HashServices_1 = require("../services/HashServices");
const TokenServices_1 = __importDefault(require("../services/TokenServices"));
class UserBusiness {
    constructor() {
        this.userData = new userData_1.default();
        this.generateId = new GenerateId_1.default();
        this.hashServices = new HashServices_1.HashServices();
        this.tokenServices = new TokenServices_1.default();
    }
    createUser(name, email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!name || !email || !password) {
                throw new Error("Dados da requisição incompletos");
            }
            if (email.indexOf("@") === -1) {
                throw new Error("Email Inválido");
            }
            const id = this.generateId.generateId();
            const passwordHash = yield this.hashServices.generateHash(password);
            const data = {
                id,
                name,
                email,
                password: passwordHash
            };
            yield this.userData.createUser(data);
            const token = this.tokenServices.generateToken(id);
            const output = {
                description: "usuario criado com sucesso",
                token: token
            };
            return output;
        });
    }
}
exports.default = UserBusiness;
//# sourceMappingURL=UserBusiness.js.map