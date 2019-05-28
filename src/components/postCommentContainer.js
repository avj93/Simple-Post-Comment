import React from 'react';
import Post from './post.js';
import CommentForm from './commentForm.js';
import './styles.css';
import { postList, postIdList, currentUser, commentList } from '../data.js';

export default class PostCommentContainer extends React.PureComponent {
  state = {
    posts: postList,
    postIds: postIdList,
    comments: commentList,
    onShowCommentForm: false,
    newReply: {},
    currentUser: currentUser,
    lastCommentId: 3
  };

  onLike = (commentId) => {
    const newLikes = this.state.comments[commentId].likes + 1;

    this.setState({
      comments: {
        ...this.state.comments,
        [commentId]: {
          ...this.state.comments[commentId],
          likes: newLikes
        }
      }
    });
  }

  onReply = (postId, commentId) => {
    this.setState({ onShowCommentForm: true, newReply: { postId, commentId } });
  }

  onDislike = (commentId) => {
    const newDislikes = this.state.comments[commentId].dislikes + 1;

    this.setState({
      comments: {
        ...this.state.comments,
        [commentId]: {
          ...this.state.comments[commentId],
          dislikes: newDislikes
        }
      }
    });
  }

  onAddComment = (content='') => {
    const { newReply: { postId, commentId }, lastCommentId, currentUser, posts, comments } = this.state;
    const newCommentIdNo = lastCommentId+1;
    const newCommentId = `cmnt_${newCommentIdNo}`;

    if (content.length) {
      const newComment = {
        content,
        authorId: currentUser.id,
        time: (new Date()).toLocaleString(),
        likes: 0,
        dislikes: 0,
        subCommentIds: [],
        id: newCommentId
      };

      const newPosts = postId ? {
        ...posts,
        [postId]: {
          ...posts[postId],
          commentIds: [...posts[postId].commentIds, newCommentId]
        }
      } : posts;

      this.setState({
        onShowCommentForm: false,
        newReply: {},
        posts: newPosts,
        lastCommentId: newCommentIdNo,
        comments: {
          ...comments,
          [commentId]: {
            ...comments[commentId],
            subCommentIds: [...comments[commentId].subCommentIds, newCommentId]
          },
          [newCommentId]: newComment
        }
      });
    }
  }


  render() {
    const { postIds, posts, onShowCommentForm, comments } = this.state;

    return (
      <div className="detailBox">
        {
          postIds.map(postId =>
            <Post
              key={postId}
              post={posts[postId]}
              onLike={this.onLike}
              onDislike={this.onDislike}
              onReply={this.onReply}
              commentList={comments}
            />
          )
        }
        {
          onShowCommentForm && <CommentForm onAddComment={this.onAddComment} />
        }
      </div>
    );
  }
}
