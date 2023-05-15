import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import data from "../assets/data/data.json";

type commentData = typeof data;

export type CommentContextType = {
  comments: commentData | null;
  setComments: (comments: commentData) => void;
};

const CommentContext = createContext<CommentContextType | undefined>(undefined);

export const CommentProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [comments, setComments] = useState<commentData | null>(null);

  useEffect(() => {
    setComments(data);
  }, []);

  const value = useMemo(
    () => ({
      comments,
      setComments,
    }),
    [comments, setComments]
  );

  return (
    <CommentContext.Provider value={value}>{children}</CommentContext.Provider>
  );
};

export const useComment = (): CommentContextType => {
  const value = useContext(CommentContext);
  if (!value) {
    throw new Error(
      "useReminders can only be called from within a RemindersProvider"
    );
  }
  return value;
};
