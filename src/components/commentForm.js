import React from 'react';
import './styles.css';

const CommentForm = ({ onAddComment }) => (
  <form className="form-inline">
    <input className="form-control" type="text" placeholder="Your comments" />
    <button className="commentButton" onClick={onAddComment}>Add</button>
  </form>
);

export default CommentForm;
