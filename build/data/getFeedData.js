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
class GetFeedData extends BaseDataBase_1.default {
    getFeed(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.raw(`${query}`);
            return result[0][0];
        });
    }
    searchMyFriends(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.raw(`
        SELECT firstId as id FROM Friends_labook 
        WHERE firstId = '${idUser}' OR secondId = '${idUser}'
        UNION
        SELECT SecondId as id FROM Friends_labook 
        WHERE firstId = '${idUser}' OR secondId = '${idUser}';
        `);
            return result[0];
        });
    }
}
exports.default = GetFeedData;
//# sourceMappingURL=getFeedData.js.map