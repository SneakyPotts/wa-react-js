import React, {useEffect, useMemo, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetch} from "../../hooks/useFetch";
import {PostService} from "../../API/PostService";
import {useDispatch, useSelector} from "react-redux";
import {fetchComments} from "../../fetches";

const Post = () => {
  const {id} = useParams();
  const [title, setTitle] = useState('');

  const [fetching, isLoading, error] = useFetch(async () => {
    const response = await PostService.getPostById(id);
    const post = await response.json();
    setTitle(post.title);
  });

  useEffect(() => {
    fetching();
  }, []);


  const dispatch = useDispatch();
  const {comments} = useSelector(state => state.comments);

  const filteredComments = useMemo(() => {
    return  comments.filter((el, index) => el.postId == id);
  }, [comments]);
  console.log(filteredComments)

  return (
    <>
      <h1>{title}</h1>
      <button onClick={() => dispatch(fetchComments())}>fetch comments</button>
      { filteredComments.map(comment => (
        <p>{comment.body}</p>
      ))}
    </>
  );
};

export default Post;