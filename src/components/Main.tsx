import React from "react";
import { useComment } from "../utils/CommentContext";
import Comment from "./Comment";
import amyrobson from "../assets/images/avatars/image-amyrobson.png";
import maxblagun from "../assets/images/avatars/image-maxblagun.png";
import ramsesmiron from "../assets/images/avatars/image-ramsesmiron.png";
import juliusomo from "../assets/images/avatars/image-juliusomo.png";
import Reply from "./Reply";

const images = [amyrobson, maxblagun, ramsesmiron, juliusomo];

const Main: React.FC = () => {
  const { comments } = useComment();

  if (!comments) {
    return <main />;
  }

  return (
    <main className="py-16 ">
      {comments.comments.map((item) => (
        <Comment
          score={item.score}
          avatar={images[item.id - 1]}
          key={item.id}
          username={item.user.username}
          createdAt={item.createdAt}
          content={item.content}
        />
      ))}
      {comments.comments[1].replies.map((item) => (
        <Reply
          avatar={images[item.id - 1]}
          key={item.id}
          score={item.score}
          username={item.user.username}
          createdAt={item.createdAt}
          content={item.content}
        />
      ))}
    </main>
  );
};

export default Main;
