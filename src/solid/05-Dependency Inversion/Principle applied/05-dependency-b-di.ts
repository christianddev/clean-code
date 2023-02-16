import {
  DataBaseService,
  JsonDataBaseService,
  Post,
} from "./05-dependency-c-di";

export class PostService {
  private posts: Post[] = [];

  constructor(private dataBaseService: DataBaseService) {}

  async getPosts() {
    this.posts = await this.dataBaseService.getPosts();

    return this.posts;
  }
}
