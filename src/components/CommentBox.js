import React from 'react';
import CreateComment from './CreateComment';
import Comment from './Comment';
import Post from './Post'
class CommentBox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        comments: this.props.comments
      };
      this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    }
    handleCommentSubmit(comment) {
      const comments = this.state.comments;
      comment.id = Date.now();
      const newComments = comments.concat([comment]);
      this.setState({
        comments: newComments
      });
    }
    render() {
      return (
        <div className="commentBox">
          <Post
            id={this.props.post.id}
            content={this.props.post.content}
            user={this.props.post.user}
          />
          {this.state.comments.map(function(comment) {
            return (
              <Comment
                key={comment.id}
                content={comment.content}
                user={comment.user}
              />
            );
          })}
          <CreateComment onCommentSubmit={this.handleCommentSubmit} />
        </div>
      );
    }
  }
  export default CommentBox;