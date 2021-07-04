import { Controller, Get, Param } from "@nestjs/common";

@Controller("hashtags")
export class HashtagsController {
  @Get("/")
  getHashtags(): string {
    //TODO: add actual logic
    return "All New Top HashTags";
  }

  @Get("/:tag/posts")
  getPostsForHashtag(@Param() param): string {
    //TODO: add actual logic
    return `Show all posts with hastags ${param.tag}`;
  }
}
