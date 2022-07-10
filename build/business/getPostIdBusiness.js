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
const GetPostByIdData_1 = __importDefault(require("../data/GetPostByIdData"));
const TokenServices_1 = __importDefault(require("../services/TokenServices"));
class GetPostIdBusiness {
    constructor() {
        this.tokenServices = new TokenServices_1.default();
        this.getPostIdData = new GetPostByIdData_1.default();
    }
    getPost(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { token, id } = data;
            if (!token) {
                throw new Error('usuário nao verificado');
            }
            if (!id) {
                throw new Error("Deve ser informado o ID");
            }
            const verifyToken = this.tokenServices.verifyToken(token);
            if (!verifyToken) {
                throw new Error("token inválido");
            }
            const result = yield this.getPostIdData.getPostbyId(id);
            return result;
        });
    }
}
exports.default = GetPostIdBusiness;
//# sourceMappingURL=getPostIdBusiness.js.map