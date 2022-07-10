"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __importDefault(require("./App"));
const createFriendsController_1 = __importDefault(require("./createFriendsController"));
const createPostController_1 = __importDefault(require("./createPostController"));
const deleteFriendsController_1 = __importDefault(require("./deleteFriendsController"));
const getAllFeedController_1 = __importDefault(require("./getAllFeedController"));
const getFeedController_1 = __importDefault(require("./getFeedController"));
const getPostIdController_1 = __importDefault(require("./getPostIdController"));
const likePostController_1 = __importDefault(require("./likePostController"));
const LoginController_1 = __importDefault(require("./LoginController"));
const unlikePostController_1 = __importDefault(require("./unlikePostController"));
const UserController_1 = __importDefault(require("./UserController"));
const userController = new UserController_1.default();
const loginController = new LoginController_1.default();
const createPostController = new createPostController_1.default();
const getPostIdController = new getPostIdController_1.default();
const createFrendship = new createFriendsController_1.default();
const deleteFriendship = new deleteFriendsController_1.default();
const getFeed = new getFeedController_1.default();
const getAllFeed = new getAllFeedController_1.default();
const likePost = new likePostController_1.default();
const unLikePost = new unlikePostController_1.default();
App_1.default.post('/signup', userController.signup);
App_1.default.post('/login', loginController.login);
App_1.default.post('/user/createPost', createPostController.createPost);
App_1.default.get('/user/post/:id', getPostIdController.getPost);
App_1.default.post('/user/createFriend/:id', createFrendship.createFriend);
App_1.default.delete('/user/deleteFriend/:id', deleteFriendship.deleteFriend);
App_1.default.get('/user/feed', getFeed.getFeed);
App_1.default.get('/AllFeed/:type', getAllFeed.getFeed);
App_1.default.post('/user/likePost/:id', likePost.doLike);
App_1.default.delete('/user/unLikePost/:id', unLikePost.unLike);
//# sourceMappingURL=index.js.map