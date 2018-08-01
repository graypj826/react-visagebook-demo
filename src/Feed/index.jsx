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
        "posts": postList,
        "body": "",
        "author": "",
        "commentBody": "",
        "commentAuthor": ""
      }
    }
    handleChange = (event) =>{
      console.log(event.currentTarget.value, " this is the handle change")
      this.setState({
            [event.currentTarget.name]  : event.currentTarget.value
      })
    }
    createPost = (e) => {
      e.preventDefault();
      e.currentTarget.reset();
      const newPost = {
        "body": this.state.body,
        "author": this.state.author,
        "comments": []
      }
      const updatedPostList = this.state.posts;
      updatedPostList.push(newPost);
      this.setState({
        "posts": updatedPostList,
        "body": "",
        "author": ""
      })
    }
    createComment = (e) => {
      //ABANDON HOPE ALL YE WHO READ THIS- REFER TO CREATEPOST INSTEEEAAAAD
      e.preventDefault();
      let postToUpdate;
      for (var i = 0; i < e.currentTarget.childNodes.length; i++) {
        if (e.currentTarget.childNodes[i].className == "whichPost") {
            postToUpdate = e.currentTarget.childNodes[i].value;
          break;
        }        
      }
      e.currentTarget.reset();
      const newComment = {
        "body": this.state.commentBody,
        "author": this.state.commentAuthor,
      }
      console.log(newComment, " this is new comment")
      const updatedPost = this.state.posts[postToUpdate];
      updatedPost.comments.push(newComment);
      const updatedPostList = this.state.posts;
      updatedPostList[postToUpdate] = updatedPost;
      this.setState({
        "body": "",
        "author": "",
        "commentBody": "",
        "commentAuthor": "",
        "posts": updatedPostList
      })
    }
    render() {
      let posts = this.state.posts.map((post, index)=>{
        return <Post data={post} whichPost={index} key={index} handleChange= {this.handleChange} createComment= {this.createComment} />
      })
      return (
        <div className="feed">
          <NewPost handleSubmit={this.createPost} handleChange={this.handleChange} />
          {posts}
        </div>
      );
    }
  }
  
  export default Feed;