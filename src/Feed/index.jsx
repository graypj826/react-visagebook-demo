import React, { Component } from 'react';
import Post from './Post/index';
import NewPost from './NewPost/index';
const postList = [{
  "body": "This is my wonderful post",
  "author": "Sylvia Plath",
  "comments": [
    { "body": "Nice work Sylvia", "author": "TS Eliot"},
    { "body": "Huzzah", "author": "virginia woolf"}
  ]
},
{
  "body": "This is my wonderful post",
  "author": "Melvin Plath",
  "comments": [
    { "body": "Nice work Sylvia", "author": "TS Eliot"},
    { "body": "Huzzah", "author": "virginia woolf"}
  ]
}]
class Feed extends Component {
    constructor(props){
      super();
      this.state = {
        "posts": postList
      }
    }
    render() {
      let posts = this.state.posts.map((post, index)=>{
        return <Post data={post} key={index} />
      })
      return (
        <div className="feed">
          <NewPost />
          {posts}
        </div>
      );
    }
  }
  
  export default Feed;