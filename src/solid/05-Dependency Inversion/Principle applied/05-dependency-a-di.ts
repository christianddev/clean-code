import { PostService } from "./05-dependency-b-di";
import {
  JsonDataBaseService,
  LocalDataBaseService,
  WebApiPostService,
} from "./05-dependency-c-di";

// Main
(async () => {
  // const dataBaseService = new LocalDataBaseService();
  // const dataBaseService = new JsonDataBaseService();
  const dataBaseService = new WebApiPostService();
  const postService = new PostService(dataBaseService);

  const posts = await postService.getPosts();

  console.log({ posts });
})();
