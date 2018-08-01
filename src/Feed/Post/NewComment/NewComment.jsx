import React, {Component} from "react";

class NewComment extends Component {
    render(){
        return (
        <div>
            <p>This is where new comments shall be made</p>
            <form onSubmit={this.props.createComment} class="new-comment-form">
                <input type="text" name="commentAuthor" placeholder="Author Name" onChange= {this.props.handleChange} />
                <input type="text" name="commentBody" placeholder="Body of Comment" onChange= {this.props.handleChange} />
                <input type="hidden" class="whichPost" name="whichPost" value={this.props.whichPost}/>
                <button>Post Comment</button>
            </form>
        </div>
        );
    }
}













export default NewComment;