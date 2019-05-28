import React from 'react';
import { userList } from '../data.js';
import './styles.css';

const Comment = ({ comment, commentList, onLike, onDislike, onReply, postId }) => (
  <li>
    <div className="commenterImage">
      <img src={userList[comment.authorId].image} alt="user" />
    </div>
    <div className="commentText">
      <p className="">{comment.content}</p>
      <span className="date sub-text">on {comment.time}</span>
      <div>
        <button className="commentButton" onClick={() => onLike(comment.id)}>Like</button>{comment.likes}
        <button className="commentButton" onClick={() => onDislike(comment.id)}>Dislike</button>{comment.dislikes}
        <button className="commentButton" onClick={() => onReply(postId, comment.id)}>Reply</button>
      </div>
      {
        comment.subCommentIds.length>0 && comment.subCommentIds.map((subId) => (
          <div className="extraPadding" key={subId}>
            <Comment
              comment={commentList[subId]}
              onLike={onLike}
              onReply={onReply}
              onDislike={onDislike}
              commentList={commentList}
            />
          </div>
        ))
      }
    </div>
  </li>
);

export default Comment;
