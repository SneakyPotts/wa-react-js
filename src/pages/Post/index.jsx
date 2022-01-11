import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetch} from "../../hooks/useFetch";
import {PostService} from "../../API/PostService";

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


  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default Post;