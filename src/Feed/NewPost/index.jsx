import React, { Component } from 'react';

class NewPost extends Component {
    render() {
      return (
        <div className="post">
        <form onSubmit={this.props.handleSubmit} class="new-post-form">
          <label htmlFor="body">Content:</label>
          <input type="text" name="body" id="body" onChange={this.props.handleChange}/>
          <label htmlFor="author">By:</label>
          <input type="text" name="author" id="author" onChange={this.props.handleChange}/>
          <input type="submit"/>
        </form>
        </div>
      );
    }
  }
  
  export default NewPost;