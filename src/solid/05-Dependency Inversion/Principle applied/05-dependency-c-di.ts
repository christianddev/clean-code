import localPost from "../../../data/local-database.json";

export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export abstract class DataBaseService {
  abstract getPosts(): Promise<Post[]>;
}

export class LocalDataBaseService implements DataBaseService {
  constructor() {}

  async getPosts() {
    return [
      {
        userId: 1,
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
      },
      {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
      },
    ];
  }
}

export class JsonDataBaseService implements DataBaseService {
  constructor() {}

  async getPosts() {
    return localPost;
  }
}

export class WebApiPostService implements DataBaseService {
  constructor() {}

  async getPosts() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }
}
