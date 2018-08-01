import React, { Component } from 'react';
import Comment from './Comment/index';

class Post extends Component {
    render() {
      let commentSomething = this.props.data.comments.map((comment, index) => {
        return <Comment data={comment} key={index} />
      })

      return (
        <div className="post">
        <h3>{this.props.data.author} says:</h3>
        <p>{this.props.data.body}</p>
        <h5>Comments:</h5>
        {commentSomething}
        </div>
      );
    }
  }
  
  export default Post;