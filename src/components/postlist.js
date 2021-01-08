import { React } from "react";
import { Col, CardTitle, } from "reactstrap";
const PostList = ({data,show}) => {
    return(
        <Col xs="6" className="left">
            <div className="post-wrapper" >
                <ul>
                {data.map((post,index) => {
                    return(
                        <li key={index} className="custom-card curs-point" onClick={() => show(post.id)}>
                            <CardTitle tag="h5" className="p-2">{post.title}</CardTitle>
                        </li>
                    )
                })}
                </ul>
            </div>
        </Col>
    )
}

export default PostList;