import React from 'react';
import './styles.css';

export default class Comment extends React.PureComponent {
  onLike = () => {
    this.props.onLike(this.props.postId, this.props.comment.id)
  }

  onReply = () => {
    this.props.onReply(this.props.postId, this.props.comment.id)
  }

  onDislike = () => {
    this.props.onDislike(this.props.postId, this.props.comment.id)
  }

  render() {
    const { props: { comment }, onLike, onDislike, onReply } = this;

    return (
      <li>
        <div className="commenterImage">
          <img src="http://placekitten.com/50/50" alt="user" />
        </div>
        <div className="commentText">
          <p className="">{comment.content}</p>
          <span className="date sub-text">on {comment.time}</span>
          <div>
            <button className="commentButton" onClick={onLike}>Like</button>{comment.likes}
            <button className="commentButton" onClick={onDislike}>Dislike</button>{comment.dislikes}
            <button className="commentButton" onClick={onReply}>Reply</button>
          </div>
        </div>
        {
          comment.subCommentIds.map((subId) =>
            <Comment comment={comment} onLike={onLike} onReply={onReply} onDislike={onDislike} key={subId} />)
        }
      </li>
    );
  }
}
