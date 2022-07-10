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
const unlikePostData_1 = __importDefault(require("../data/unlikePostData"));
const TokenServices_1 = __importDefault(require("../services/TokenServices"));
class UnLikePostBusiness {
    constructor() {
        this.tokenServices = new TokenServices_1.default();
        this.unlikePostData = new unlikePostData_1.default();
    }
    unLikePost(token, idPost) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!token) {
                throw new Error('usuário nao verificado');
            }
            if (!idPost) {
                throw new Error("dados incompletos na requisição");
            }
            const verifyToken = this.tokenServices.verifyToken(token);
            if (!verifyToken) {
                throw new Error("token inválido");
            }
            const verifyLike = yield this.unlikePostData.verifyLike(verifyToken, idPost);
            if (!verifyLike) {
                throw new Error("Você não curtiu este post");
            }
            const result = yield this.unlikePostData.unLike(verifyToken, idPost);
            return result;
        });
    }
}
exports.default = UnLikePostBusiness;
//# sourceMappingURL=unLikePostBusiness.js.map