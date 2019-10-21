import React from 'react';
class Post extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div className="post">
          <h2 className="postAuthor">{this.props.user}</h2>
          <span className="postBody">{this.props.content}</span>
          {this.props.children}
        </div>
      );
    }
  }
  export default Post;