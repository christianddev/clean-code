import { PhotosService, PostService, TodoService } from "./02-open-close-b";
import { HttpCLient } from "./03-open-close";

(async () => {
  const httpCLient = new HttpCLient();
  const todoService = new TodoService(httpCLient);
  const postService = new PostService(httpCLient);
  const photosService = new PhotosService(httpCLient);

  const todos = await todoService.getTodoItems();
  const posts = await postService.getPosts();
  const photos = await photosService.getPhotos();

  console.log({ todos, posts, photos });
})();
