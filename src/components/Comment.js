import React from 'react';
class Comment extends React.Component {
    render() {
      return (
        <div className="comment">
          <h2 className="commentAuthor">{this.props.user}</h2>
          <span className="commentContent">{this.props.content}</span>
        </div>
      );
    }
  }
  export default Comment