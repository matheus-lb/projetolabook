"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class BaseDataBase {
    constructor() {
        this.connection = (0, knex_1.default)({
            client: "mysql",
            connection: {
                host: process.env.DB_HOST,
                port: Number(process.env.DB_PORT || "3306"),
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_DATABASE,
            },
        });
    }
}
exports.default = BaseDataBase;
//# sourceMappingURL=BaseDataBase.js.map