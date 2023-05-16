import React from "react";
import plus from "../assets/images/icon-plus.svg";
import minus from "../assets/images/icon-minus.svg";
import { useComment } from "../utils/CommentContext";

export type CommentProps = {
  username: string;
  createdAt: string;
  content: string;
  score?: number;
  avatar?: string;
  replies?: Array<CommentProps>;
  classNames?: string;
};

const Comment: React.FC<CommentProps> = ({
  username,
  createdAt,
  content,
  score,
  avatar,
  classNames,
}: CommentProps) => {
  const { comments } = useComment();

  if (!comments) {
    return <main />;
  }

  return (
    <main className="justify-center flex">
      <article
        className={`${classNames} bg-white w-[50%] mb-10 p-6 flex flex-row rounded-lg`}
      >
        <div className="flex flex-col justify-between items-center mr-5 h-[6.5rem] bg-[#F5F6FA] rounded-lg w-[6rem]">
          <img className="p-3" src={plus} />
          <h2 className="font-rmedium text-indigo-900">{score}</h2>
          <img className="p-3" src={minus} />
        </div>
        <div>
          <div className="flex flex-row items-center space-x-4">
            <img className="h-8" src={avatar} />
            <h1 className="font-rbold">{username}</h1>
            <h1 className="text-[#585858] font-rregular">{createdAt}</h1>
            <h1 className="text-indigo-900 font-rmedium">Reply</h1>
          </div>
          <p className="font-rregular mt-4 text-[#727272]">{content}</p>
        </div>
      </article>
    </main>
  );
};

export default Comment;
