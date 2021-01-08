
import React, { useEffect, useState } from 'react';
import { Row } from 'reactstrap';
import PostList from "./postlist";
import PostDetails from "./postDetails";
import {getPost, getPostDetails} from '../utils/api';

const Post = () => {
    const [data, setData] = useState([]);
    const [post, setPost ] = useState({});
    const [postDetail, setPostDetails] = useState([]);

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
          </Row>
  );
};

export default Post;