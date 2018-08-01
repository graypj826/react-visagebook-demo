import React, { Component } from 'react';

class Comment extends Component {
    render() {
      return (
        <div className="comment">
        <p>{this.props.data.author} says: {this.props.data.body}</p>
        </div>
      );
    }
  }
  
  export default Comment;