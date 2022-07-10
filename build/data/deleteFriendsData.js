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
const BaseDataBase_1 = __importDefault(require("./BaseDataBase"));
class DeleteFriendsData extends BaseDataBase_1.default {
    deleteFriendship(idUser, idFriend) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.raw(`
        DELETE FROM Friends_labook
        WHERE firstId = '${idUser}' AND SecondId = '${idFriend}' 
        OR firstId = '${idFriend}'AND secondId = '${idUser}'
        `);
            return { result: 'Amizade finalizada' };
        });
    }
    searchFriendship(idUser, idFriend) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.raw(`
            SELECT * FROM Friends_labook
            WHERE firstId = '${idUser}' AND SecondId = '${idFriend}' 
            OR firstId = '${idFriend}'AND secondId = '${idUser}'
        `);
            return result[0][0];
        });
    }
}
exports.default = DeleteFriendsData;
//# sourceMappingURL=deleteFriendsData.js.map