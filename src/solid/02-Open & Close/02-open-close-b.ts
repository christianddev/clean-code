import { HttpCLient } from "./02-open-close-c";

export class TodoService {
  constructor(private httpCLient: HttpCLient) {}
  async getTodoItems() {
    const { data } = await this.httpCLient.get(
      "https://jsonplaceholder.typicode.com/todos/"
    );
    return data;
  }
}

export class PostService {
  constructor(private httpCLient: HttpCLient) {}
  async getPosts() {
    const { data } = await this.httpCLient.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return data;
  }
}

export class PhotosService {
  constructor(private httpCLient: HttpCLient) {}
  async getPhotos() {
    const { data } = await this.httpCLient.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    return data;
  }
}
