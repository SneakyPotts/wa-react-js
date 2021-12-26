const API_URL = process.env.REACT_APP_API_URL;

export class PostService {
    static getPosts() {
        return fetch(`${API_URL}posts`);
    }
}