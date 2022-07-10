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
const likePostData_1 = __importDefault(require("../data/likePostData"));
const TokenServices_1 = __importDefault(require("../services/TokenServices"));
class LikePostBusiness {
    constructor() {
        this.tokenServices = new TokenServices_1.default();
        this.likePostData = new likePostData_1.default();
    }
    createLikePost(token, idPost) {
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
            const vefifyPost = yield this.likePostData.verifyPost(idPost);
            if (!vefifyPost) {
                throw new Error("post inexistente");
            }
            const verifyLike = yield this.likePostData.verifyLike(verifyToken, idPost);
            if (verifyLike) {
                throw new Error("Post já curtido");
            }
            const result = yield this.likePostData.doLike(verifyToken, idPost);
            return result;
        });
    }
}
exports.default = LikePostBusiness;
//# sourceMappingURL=LikePostBusiness.js.map