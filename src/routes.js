import Posts from "./pages/Posts";
import About from "./pages/About";
import Post from "./pages/Post";

export const routes = [
  {path: '/', element: <Posts />, isPrivate: true},
  {path: '/about', element: <About/>, isPrivate: true},
  {path: '/post/:id', element: <Post/>, isPrivate: true},
];