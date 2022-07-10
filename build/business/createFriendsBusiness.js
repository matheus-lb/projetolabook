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
const createFriendsData_1 = __importDefault(require("../data/createFriendsData"));
const GenerateId_1 = __importDefault(require("../services/GenerateId"));
const TokenServices_1 = __importDefault(require("../services/TokenServices"));
class CreateFriendsBusiness {
    constructor() {
        this.tokenServices = new TokenServices_1.default;
        this.generateId = new GenerateId_1.default;
        this.friendsData = new createFriendsData_1.default();
    }
    createFriend(token, idFriend) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!token) {
                throw new Error('usuário nao verificado');
            }
            if (!idFriend) {
                throw new Error("dados incompletos na requisição");
            }
            const verifyToken = this.tokenServices.verifyToken(token);
            if (!verifyToken) {
                throw new Error("token inválido");
            }
            const verifyUser = yield this.friendsData.searchUserById(idFriend);
            if (!verifyUser) {
                throw new Error('usuário nao encontrado');
            }
            const verifyFriendship = yield this.friendsData.searchFriendship(verifyToken, idFriend);
            if (verifyFriendship) {
                throw new Error('Relação de amizade já existente');
            }
            const result = this.friendsData.createFriendship(verifyToken, idFriend);
            return result;
        });
    }
}
exports.default = CreateFriendsBusiness;
//# sourceMappingURL=createFriendsBusiness.js.map