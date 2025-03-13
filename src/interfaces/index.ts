export interface Post {
  id: string;
  user: {
    username: string;
    image: string;
    fullname: string;
  };
  createdAt: Date;
  image: string;
  interactions: {
    reacts: number;
    comments: number;
    shares: number;
  };
  body: string;
}
