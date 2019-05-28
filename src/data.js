const currentUser = {
  name: 'Anitha John',
  id: 'user_001'
};

const userList = {
  user_001: 'Anitha John',
  user_002: 'Anith John',
  user_003: 'Anita John',
  user_004: 'Anithaa John',
};

const postIdList = ['post_001'];

const commentList = {
  cmnt_01: {
    content: 'Lorem ipsum 1',
    authorId: 'user_001',
    time: 'May 28th, 2019',
    likes: 0,
    dislikes: 0,
    subCommentIds: ['cmnt_03'],
    id: 'cmnt_01'
  },
  cmnt_02: {
    content: 'Lorem ipsum 2',
    authorId: 'user_002',
    time: 'May 28th, 2019',
    likes: 0,
    dislikes: 0,
    subCommentIds: [],
    id: 'cmnt_02'
  }
};

const postList = {
  post_001:   {
    id: 'post_001',
    content: 'This is post 1',
    commentIds: ['cmnt_01', 'cmnt_02'],
    authorId: 'user_004'
  }
};

export {
  currentUser,
  postList,
  userList,
  postIdList,
  commentList
}
