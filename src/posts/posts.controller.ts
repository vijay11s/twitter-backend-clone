import { Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller("posts")
export class PostsController {
  @Get("/")
  getAllPosts(): string {
    return "All Posts";
  }

  @Get("/:postId")
  getPostDetails(@Param() param): string {
    return `Details of Post Id: ${param.postId}`;
  }

  @Post("/")
  createNewPost(): string {
    return `New Post Created`;
  }

  @Delete("/:postId")
  deletePost(@Param() param): string {
    return `Post with id ${param.postId} deleted`;
  }

  @Put("/:postId")
  likePost(@Param() param): string {
    return `Liked Post ${param.postId}`
  }

  @Delete("/:postId")
  unlikePost(@Param() param): string {
    return `unLiked Post ${param.postId}`
  }
}
