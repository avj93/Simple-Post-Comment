import React from 'react';
import './styles.css';

export default class CommentForm extends React.PureComponent {
  state = {
    newComment: ''
  };

  onChange = (e) => {
    this.setState({
      newComment: e.target.value
    })
  }

  onAddComment = () => {
    this.props.onAddComment(this.state.newComment);
  }

  render() {
    const { onAddComment, onChange, state: { newComment } } = this; 
    return (
      <form className="form-inline">
        <input className="form-control" type="text" placeholder="Your comments" value={newComment} onChange={onChange} />
        <button className="commentButton" onClick={onAddComment}>Add</button>
      </form>
    );
  }
}
