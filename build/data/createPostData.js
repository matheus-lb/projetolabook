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
class CreatePostData extends BaseDataBase_1.default {
    createPost(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.raw(`
            INSERT INTO Posts_labook (id,description,photo,date,type,user_id)
            values ('${data.id}','${data.description}','${data.photo}','${data.date}','${data.type}','${data.userId}')
        `);
            return { result: 'post criado com sucesso' };
        });
    }
}
exports.default = CreatePostData;
//# sourceMappingURL=createPostData.js.map