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
const getAllFeedBusiness_1 = __importDefault(require("../business/getAllFeedBusiness"));
class GetAllFeedController {
    getFeed(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const getAllFeedBusiness = new getAllFeedBusiness_1.default();
                const type = req.params.type;
                const result = yield getAllFeedBusiness.getFeed(type);
                res.status(201).send(result);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
}
exports.default = GetAllFeedController;
//# sourceMappingURL=getAllFeedController.js.map