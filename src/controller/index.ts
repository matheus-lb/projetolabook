import app from "./App";
import CreateFriendsController from "./createFriendsController";
import CreatePostController from "./createPostController";
import DeleteFriendsController from "./deleteFriendsController";
import GetAllFeedController from "./getAllFeedController";
import GetFeedController from "./getFeedController";
import GetPostIdController from "./getPostIdController";
import LikePostController from "./likePostController";
import LoginController from "./LoginController";
import UnLikePostController from "./unlikePostController";
import UserController from "./UserController";


const userController = new UserController()
const loginController = new LoginController()
const createPostController = new CreatePostController()
const getPostIdController = new GetPostIdController()
const createFrendship = new CreateFriendsController()
const deleteFriendship = new DeleteFriendsController()
const getFeed = new GetFeedController()
const getAllFeed = new GetAllFeedController()
const likePost = new LikePostController()
const unLikePost = new UnLikePostController()

app.post('/signup',userController.signup)

app.post('/login',loginController.login)

app.post('/user/createPost',createPostController.createPost)

app.get('/user/post/:id',getPostIdController.getPost)

app.post('/user/createFriend/:id', createFrendship.createFriend)

app.delete('/user/deleteFriend/:id',deleteFriendship.deleteFriend)

app.get('/user/feed',getFeed.getFeed)

app.get('/AllFeed/:type',getAllFeed.getFeed)

app.post('/user/likePost/:id',likePost.doLike)

app.delete('/user/unLikePost/:id',unLikePost.unLike)


