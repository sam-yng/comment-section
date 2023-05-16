import React from "react";
import { useComment } from "../utils/CommentContext";
import Comment from "./Comment";
import amyrobson from "../assets/images/avatars/image-amyrobson.png";
import maxblagun from "../assets/images/avatars/image-maxblagun.png";
import ramsesmiron from "../assets/images/avatars/image-ramsesmiron.png";
import juliusomo from "../assets/images/avatars/image-juliusomo.png";

const images = [amyrobson, maxblagun, ramsesmiron, juliusomo];

const Main: React.FC = () => {
  const { comments } = useComment();

  if (!comments) {
    return <main />;
  }

  return (
    <main className="py-16">
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
      {comments.comments
        .filter((item) => item.replies.length > 0)
        .map((item) =>
          item.replies.map((reply) => (
            <Comment
              score={reply.score}
              avatar={images[reply.id - 1]}
              key={reply.id}
              username={reply.user.username}
              createdAt={reply.createdAt}
              content={reply.content}
              classNames="w-[44%]"
            />
          ))
        )}
    </main>
  );
};

export default Main;
