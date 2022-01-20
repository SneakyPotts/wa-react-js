import React from 'react';
import {fetchUsers} from "../../fetches";
import {useDispatch} from "react-redux";

const About = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h1>About page</h1>
      <button onClick={() => dispatch(fetchUsers())}>fetch users</button>
    </>
  );
};

export default About;