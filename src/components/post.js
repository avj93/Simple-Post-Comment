import React from 'react';
import Comment from './comment.js';
import './styles.css';
import { userList } from '../data.js';

export default class Post extends React.PureComponent {

  render() {
    const { post: { content, commentIds, authorId, id }, onLike, onDislike, onReply, commentList } = this.props;

    return (
      <React.Fragment>
        <div className="titleBox">
          <label>{`${userList[authorId]} says...`}</label>
        </div>
        <div className="commentBox">
          <p className="taskDescription">{content}</p>
        </div>
        <div className="actionBox">
          <ul className="commentList">
            { commentIds.map((commentId) =>
              <Comment comment={commentList[commentId]} onLike={onLike} onReply={onReply} onDislike={onDislike} key={commentId} postId={id}/>)
            }
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
