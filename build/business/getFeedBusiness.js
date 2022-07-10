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
const getFeedData_1 = __importDefault(require("../data/getFeedData"));
const TokenServices_1 = __importDefault(require("../services/TokenServices"));
class GetFeedBusiness {
    constructor() {
        this.tokenServices = new TokenServices_1.default;
        this.getFeedData = new getFeedData_1.default();
    }
    getFeed(token) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!token) {
                throw new Error('usuário nao verificado');
            }
            const verifyToken = this.tokenServices.verifyToken(token);
            if (!verifyToken) {
                throw new Error("token inválido");
            }
            const myFriends = yield this.getFeedData.searchMyFriends(verifyToken);
            let arrayPosts = [];
            for (let i = 0; i < myFriends.length; i++) {
                const query = (`
                SELECT * FROM Posts_labook
                WHERE user_id = '${myFriends[i].id}'
            `);
                const result = yield this.getFeedData.getFeed(query);
                arrayPosts.push(result);
            }
            const postsOrdenado = arrayPosts.sort((a, b) => {
                return (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0);
            });
            return postsOrdenado;
        });
    }
}
exports.default = GetFeedBusiness;
//# sourceMappingURL=getFeedBusiness.js.map