const currentUser = {
  name: 'Anitha John',
  id: 'user_001'
};

const userList = {
  user_001: { name: 'Anitha John', image: 'http://placekitten.com/45/45' },
  user_002: { name: 'Anith John', image: 'http://placekitten.com/50/50' },
  user_003: { name: 'Anita John', image: 'http://placekitten.com/40/40' },
  user_004: { name: 'Anithaa John', image: 'http://placekitten.com/30/30'  }
};

const postIdList = ['post_001'];

const commentList = {
  cmnt_01: {
    content: 'Lorem ipsum 1',
    authorId: 'user_001',
    time: 'May 26th, 2019',
    likes: 0,
    dislikes: 0,
    subCommentIds: ['cmnt_03'],
    id: 'cmnt_01'
  },
  cmnt_02: {
    content: 'Lorem ipsum 2',
    authorId: 'user_002',
    time: 'May 27th, 2019',
    likes: 0,
    dislikes: 0,
    subCommentIds: [],
    id: 'cmnt_02'
  },
  cmnt_03: {
    content: 'Lorem ipsum 3',
    authorId: 'user_003',
    time: 'May 28th, 2019',
    likes: 0,
    dislikes: 0,
    subCommentIds: [],
    id: 'cmnt_03'
  }
};

const postList = {
  post_001:   {
    id: 'post_001',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
