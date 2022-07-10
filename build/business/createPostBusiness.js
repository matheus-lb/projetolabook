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
const createPostData_1 = __importDefault(require("../data/createPostData"));
const GenerateId_1 = __importDefault(require("../services/GenerateId"));
const TokenServices_1 = __importDefault(require("../services/TokenServices"));
class CreatePostBusiness {
    constructor() {
        this.tokenServices = new TokenServices_1.default;
        this.generateId = new GenerateId_1.default;
        this.postData = new createPostData_1.default;
    }
    createPost(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { token, photo, description, type } = data;
            if (!token) {
                throw new Error('usuário nao verificado');
            }
            if (!photo || !description || !type) {
                throw new Error("dados incompletos na requisição");
            }
            const verifyToken = this.tokenServices.verifyToken(token);
            console.log(verifyToken);
            if (!verifyToken) {
                throw new Error("token inválido");
            }
            const id = this.generateId.generateId();
            const inputData = {
                id: id,
                photo: photo,
                description: description,
                date: Date.now(),
                type: type,
                userId: verifyToken
            };
            const result = yield this.postData.createPost(inputData);
            return result;
        });
    }
}
exports.default = CreatePostBusiness;
//# sourceMappingURL=createPostBusiness.js.map