import React from 'react';
import {
    Card, CardText, CardBody, CardSubtitle,
    CardTitle, Col
  } from 'reactstrap';
const PostDetail = ({post, postDetail}) => {
    return(
        <Col xs="6"  className="right">
            <Card className="custom-card">
                <CardBody>
                    <CardTitle tag="h5"><strong>Post </strong></CardTitle>
                    <CardTitle tag="h5">{post.title}</CardTitle>
                    <CardText>{post.body}</CardText>
                </CardBody>
            </Card>
            {
                postDetail.map((user,index) => {
                    return(
                        <Card className="custom-card" key={index}>
                            <CardBody>
                                <CardTitle tag="h5"><strong>Name : </strong>{user.name}</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted"><strong>Email : </strong>{user.email}</CardSubtitle>
                                <CardText><strong>Comment :</strong> {user.body}</CardText>
                            </CardBody>
                        </Card>
                    )
                })
            }
        </Col>
    )
}

export default PostDetail;