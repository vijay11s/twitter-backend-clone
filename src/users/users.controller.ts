import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from "@nestjs/common";

@Controller("users")
export class UsersController {
  @Get("/@:username")
  getUserByUsername(@Param() param): string {
    return `Details of the user ${param.username}`;
  }

  @Get("/:userId")
  getUserByUserId(@Param() param): string {
    return `Details of the user id = ${param.userId}`;
  }

  @Post("/")
  createUser(): string {
    return "New user created!";
  }

  @Patch("/:userId")
  updateUserDetail(@Param() param): string {
    return `Details of user (id = ${param.userId}) updated`;
  }

  @Put("/:userId/follow")
  followUser(): string {
    return "You followed User";
  }

  @Delete("/:userid/follow")
  unfollowUser(): string {
    return "you unfollowed user";
  }

  @Get("/:userid/followers")
  getFollowersOfUser(): string {
    return "get followers of user";
  }

  @Put("/:userid/followees")
  getFolloweesOfUser(): string {
    return `get followees of given user`;
  }
}
