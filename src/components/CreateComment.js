import React from 'react';
class CreateComment extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        content: "",
        user: ""
      };
      this.handleUserChange = this.handleUserChange.bind(this);
      this.handleTextChange = this.handleTextChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleUserChange(event) {
      const val = event.target.value;
      this.setState(() => ({
        user: val
      }));
    }
    handleTextChange(event) {
      const val = event.target.value;
      this.setState({
        content: val
      });
    }
    handleSubmit(event) {
      event.preventDefault();
      this.props.onCommentSubmit({
        user: this.state.user.trim(),
        content: this.state.content.trim()
      });
  
      this.setState(() => ({
        user: "",
        content: ""
      }));
    }
    render() {
      return (
        <form className="createComment" onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleUserChange}
            value={this.state.user}
            type="text"
            placeholder="Your name"
          />
          <input
            onChange={this.handleTextChange}
            value={this.state.user}
            type="text"
            placeholder="Thoughts?"
          />
          <input type="submit" value="Post" />
        </form>
      );
    }
  }
  export default CreateComment;