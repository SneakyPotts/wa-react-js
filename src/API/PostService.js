const API_URL = process.env.REACT_APP_API_URL;

export class PostService {
    static getPosts(limit, page) {
        return fetch(`${API_URL}posts?_limit=${limit}&_page=${page}`);
    }
}