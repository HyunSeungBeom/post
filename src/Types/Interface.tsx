export interface IBoaderList {
  board_id: number;
  imageLink: string;
  content: string;
  userNickname: string;
  layout: number;
  createdAt: string;
  updatedAt: string;
  likes: Array<Likes>;
}

interface Likes {
  user_email: string;
  user_nickname: string;
}
