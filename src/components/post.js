import React, { useEffect, useState } from 'react';
import { Row } from 'reactstrap';
import { useSelector } from "react-redux";
import PostList from "./postlist";
import PostDetails from "./postDetails";
import Logout from "./logout";
import { useHistory } from "react-router-dom";
import {getPost, getPostDetails} from '../utils/api';

const Post = () => {
    const state = useSelector(state => state);
    let history = useHistory();
    const [data, setData] = useState([]);
    const [post, setPost ] = useState({});
    const [postDetail, setPostDetails] = useState([]);
    if(!state.login.token){
        history.push(`/`);
    }
    useEffect(() => {
        (async function() {
            const response = await getPost();
            setData(response);
            setPost(response[0])
            const postDetails = await getPostDetails(1);
            setPostDetails(postDetails);
        })()
    },[])
       
    const show = async(id) => {
        const postDetails = await getPostDetails(id);
        if(data.length > 0) setPost(data[id - 1]);
        setPostDetails(postDetails);
    }

  return (
          <Row className="m-0">
              <PostList data={data} show={(id) => show(id)} />
              <PostDetails post={post} postDetail={postDetail} />
              <Logout/>
          </Row>
  );
};

export default Post;